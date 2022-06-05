import { useState, useEffect } from "react"
import { Plus } from "react-feather"

import Button from "../Button"
import Input from "../Input"

import { StyledUsers, StyledTable, StyledForm } from "./styles"

export default function Users () {
    const [ isFormOpen, setFormOpen ] = useState<boolean>(false)
    const [ users, setUsers ] = useState(null)

    const handleFormShow = (e) => {
        e.preventDefault()
        setFormOpen(!isFormOpen)
    }

    const handleUserCreation = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Mario",
                email: "ultimopassageiro@redetv.com",
                senha: "1234"
            })
        })
    }

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json().then(list => setUsers(list)))
            .catch(err => console.log(err))
    }, [handleUserCreation])

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
                                variant="outline"
                                text="Cancelar"
                                onClick={ handleFormShow }
                            />
                            <Button
                                text="Cadastrar"
                                onClick={ handleUserCreation }
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
                    {
                        users && users.map(user => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.created_at}</td>
                                    <td>Detalhes</td>
                                </tr>
                            )
                        })
                    }
                </StyledTable>
            </div>
        </StyledUsers>
    )
}