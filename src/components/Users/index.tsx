import { useState } from "react"
import { Plus } from "react-feather"

import Button from "../Button"
import Input from "../Input"

import { StyledUsers, StyledTable, StyledForm } from "./styles"

export default function Users () {
    const [ isFormOpen, setFormOpen ] = useState<boolean>(false)

    const handleFormShow = () => {
        setFormOpen(!isFormOpen)
    }

    return (
        <StyledUsers>
            <header className="users__header">
                <h1 className="users__title">Usuários</h1>
                <div className="users__action">
                    <Button
                        icon={<Plus/>}
                        text="Novo usuário"
                        onClick={handleFormShow}
                    />
                </div>
            </header>
            {
                isFormOpen && 
                <div className="users__form">
                    <StyledForm>
                        <div className="users__form-inputs">
                            <Input
                                label="Nome"
                                type="text"
                                placeholder="Matheus Henrique"
                            />
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="********"
                            />
                        </div>
                        <div className="users__form-actions">
                            <Button
                                text="Cadastrar"
                            />
                            <Button
                                variant="outline"
                                text="Cancelar"
                            />
                        </div>
                    </StyledForm>
                </div>
            }
            <div className="users__content">
                <StyledTable>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Criado em</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Matheus Henrique</td>
                        <td>matheus@matheus.com</td>
                        <td>Ontem</td>
                        <td>Detalhes</td>
                    </tr>
                    <tr>
                        <td>Matheus Henrique</td>
                        <td>matheus@matheus.com</td>
                        <td>Ontem</td>
                        <td>Detalhes</td>
                    </tr>
                    <tr>
                        <td>Matheus Henrique</td>
                        <td>matheus@matheus.com</td>
                        <td>Ontem</td>
                        <td>Detalhes</td>
                    </tr>
                </StyledTable>
            </div>
        </StyledUsers>
    )
}