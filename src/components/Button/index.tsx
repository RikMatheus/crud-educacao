import { ReactNode } from 'react'
import { StyledButton } from './styles'

type ButtonProps = {
    text: string,
    icon?: ReactNode,
    variant?: string,
    onClick?: () => void,
}

export default function Button ({variant, text, icon, onClick}:  ButtonProps) {
    return (
        <StyledButton variant={ variant } onClick={onClick}>
            { icon } { text }
        </StyledButton>
    )
}