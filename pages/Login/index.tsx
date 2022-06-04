import Card from "../../src/components/Card";
import Input from "../../src/components/Input";
import Button from "../../src/components/Button"

import { StyledLogin } from './styles'

export default function Login () {
    return (
        <StyledLogin>
            <div className="content">
                <Card
                    title="Entre na sua conta"
                >
                    <Input
                        label="E-mail"
                        type="text"
                        placeholder="fulano@example.com"
                    />
                    <Input
                        label="Senha"
                        type="password"
                        placeholder="**********"
                    />
                    <Button text="Entrar"/>
                    <Button variant="outline" text="Perdeu seu acesso?"/>
                </Card>
            </div>
        </StyledLogin>
    );
}