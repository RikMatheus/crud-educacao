import { StyledButton } from './styles'

type ButtonProps = {
    variant?: string,
    text: string,
}

export default function Button ({variant, text}:  ButtonProps) {
    return (
        <StyledButton variant={ variant }>
            { text }
        </StyledButton>
    )
}