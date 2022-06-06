import { useState, useEffect } from "react"
import { Plus, X } from "react-feather"

import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

import { StyledUsers, StyledTable, StyledForm } from "./styles"

type User = {
    id: number,
    name: string,
    email: string,
    created_at: string,
    password: string,
}

/**
 * Nesta página, todo o gerenciamento de formulários foi feito na unha,
 * apenas com os estados disponíveis na página.
 */

export default function Users () {
    const [ isFormOpen, setFormOpen ] = useState<boolean>(false)
    const [ isEditFormOpen, setEditFormOpen ] = useState<boolean>(false)
    const [ users, setUsers ] = useState(null)
    const [ currentUser, setCurrentUser ] = useState<User>(null)

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
        setEditFormOpen(false)

        setName('')
        setEmail('')
        setPassword('')
    }

    const handleEditFormShow = (user: User) => {
        setEditFormOpen(true)
        setCurrentUser(user)

        setName(user.name)
        setEmail(user.email)
    }

    const handleEditFormClose = (e) => {
        e.preventDefault()
        setEditFormOpen(false)
    }

    const handleUserCreation = async (e) => {
        e.preventDefault()
        await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })

        setName('')
        setEmail('')
        setPassword('')
        handleUserFetch()
    }

    const handleUserDeletion = async (id) => {
        await fetch(`/api/user/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })

        handleUserFetch()
    }

    const handleUserUpdate = async (e) => {
        e.preventDefault()
        await fetch(`/api/user/${currentUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                email: email,
            })
        })

        setName('')
        setEmail('')
        setPassword('')
        setEditFormOpen(false)
        handleUserFetch()
    }

    const handleUserFetch = async () => {
        await fetch('/api/users')
            .then(res => res.json().then(list => {
                setUsers(list)
            }))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        handleUserFetch()
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
                        <div className="users__form-content">
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
                        </div>
                    </StyledForm>
                </div>
            }
            {
                isEditFormOpen && 
                <div className="users__form">
                    <StyledForm onSubmit={ handleUserUpdate }>
                        <div className="users__form-header">
                            <p>Editando informações para { currentUser.name }</p>
                        </div>
                        <div className="users__form-content">
                            <div className="users__form-inputs">
                                <Input
                                    label="Nome"
                                    type="text"
                                    value={name}
                                    onChange={ handleNameChange }
                                    required
                                />
                                <Input
                                    label="E-mail"
                                    type="email"
                                    value={email}
                                    onChange={ handleEmailChange }
                                    errorMessage="Insira um e-mail válido."
                                    required
                                />
                            </div>
                            <div className="users__form-actions">
                                <Button
                                    variant="outline"
                                    text="Cancelar"
                                    onClick={ () => handleEditFormClose() }
                                />
                                <Button
                                    text="Cadastrar"
                                />
                            </div>
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
                                            <span className="table__edit" onClick={() => handleEditFormShow(user)}>Editar</span>
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