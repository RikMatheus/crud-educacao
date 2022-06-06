import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

export type LoggedUserType = {
    name: string,
    email: string,
}

type SignInData = {
    email: string,
    password: string,
}

type AuthContextType = {
    isAuthenticated: boolean
    loggedUser: LoggedUserType,
    signIn: (data: SignInData) => Promise<void>
    signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider ({ children }) {
    const [ loggedUser, setLoggedUser ] = useState<LoggedUserType | null>(null) 
    const isAuthenticated = !!loggedUser

    useEffect(() => {
        const { 'crud.token': token } = parseCookies()

        if(token) {
            let token_id = token.replace(/.*\[|\]/gi, '')
            fetchUserData(token_id)
        }
    }, [])

    const fetchUserData = async (id) => {
        await fetch(`/api/user/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            res.json().then(
                user => setLoggedUser(user)
            ).catch(err => {
                return err
            })
        })
    }

    const signIn = async ({ email, password }: SignInData) => {
        await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json().then(({ token, user }) => {            
            setCookie(undefined, 'crud.token', token, {
                maxAge: 60 * 60 * 1 // 1 hora
            })

            setLoggedUser({
                name: user.name,
                email: user.email
            })

            Router.push('/home')
        }))
    }

    const signOut = async () => {
        destroyCookie(undefined, 'crud.token')
        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ loggedUser, isAuthenticated, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}