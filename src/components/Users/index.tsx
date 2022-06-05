import { useState, useEffect } from "react"
import { Plus, X } from "react-feather"

import Button from "../Button"
import Input from "../Input"

import { StyledUsers, StyledTable, StyledForm } from "./styles"

export default function Users () {
    const [ isFormOpen, setFormOpen ] = useState<boolean>(false)
    const [ users, setUsers ] = useState(null)

    const [ name, setName ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

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
                name: name,
                email: email,
                password: password
            })
        })

// node ./src/services/database.mjs && 

        fetch('/api/users')
            .then(res => res.json().then(list => {
                setUsers(list)
            }))
            .catch(err => console.log(err))
    }

    const handleUserDeletion = async (id) => {
        await fetch(`/api/user/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })

        await fetch('/api/users')
            .then(res => res.json().then(list => {
                setUsers(list)
                console.log(users)
            }))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json().then(list => {
                setUsers(list)
                console.log(users)
            }))
            .catch(err => console.log(err))
    }, [])

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
                    <StyledForm onSubmit={ handleUserCreation }>
                        <div className="users__form-inputs">
                            <Input
                                label="Nome"
                                type="text"
                                placeholder="Matheus Henrique"
                                onChange={ handleNameChange }
                                required
                            />
                            <Input
                                label="E-mail"
                                type="email"
                                placeholder="neste@formato.com"
                                onChange={ handleEmailChange }
                                errorMessage="Insira um e-mail válido."
                                required
                            />
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="********"
                                onChange={ handlePasswordChange }
                                pattern="^[A-Za-z0-9]{6,15}$"
                                errorMessage="A senha deve ter entre 6 e 15 caracteres."
                                required
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
                            />
                        </div>
                    </StyledForm>
                </div>
            }
            <div className="users__content">
                <StyledTable>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Criado em</th>
                            <th></th>
                        </tr>
                        {
                            users && users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.created_at}</td>
                                        <td>
                                            <span className="table__edit">Editar</span>
                                            <span className="table__delete" onClick={() => handleUserDeletion(user.id)}>Excluir</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </StyledTable>
            </div>
        </StyledUsers>
    )
}