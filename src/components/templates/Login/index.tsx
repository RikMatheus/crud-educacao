import { useForm } from "react-hook-form";

import Card from "../../molecules/Card";
import Button from "../../atoms/Button"

import { StyledLogin, StyledForm, StyledInput } from './styles'
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Login () {
    const { register, handleSubmit } = useForm()
    const [ errorMessage, setErrorMessage ] = useState<string | null>(null)
    const { signIn } = useContext(AuthContext)

    const handleSignIn = async (data) => {
        await signIn(data).then().catch(err => {
            setErrorMessage("Não foi possível entrar! Verifique suas credenciais e tente novamente.")
        })
    }

    /**
     * Nesta página, o gerenciamento de formulários foi feito
     * com a ajuda da biblioteca react-hook-form. 
     */

    return (
        <StyledLogin>
            <div className="content">
                <Card
                    title="Entre na sua conta"
                >
                    <StyledForm onSubmit={handleSubmit(handleSignIn)}>
                        <p className="login__label">E-mail</p>
                        <StyledInput
                            type="email"
                            placeholder="fulano@example.com"
                            data-test-id="email"
                            {...register('email')}
                        />
                        <p className="login__label">Senha</p>
                        <StyledInput
                            type="password"
                            placeholder="**********"
                            pattern="^[A-Za-z0-9]{6,15}$"
                            data-test-id="password"
                            {...register('password')}
                        />
                        <span>A senha deve ter entre 6 e 15 caracteres</span>
                        {
                            errorMessage &&
                            <div className="login__error" data-test-id="login-error">
                                { errorMessage }
                            </div>
                        }
                        <Button text="Entrar"/>
                        <Button variant="outline" text="Perdeu seu acesso?"/>
                    </StyledForm>
                </Card>
            </div>
        </StyledLogin>
    );
}