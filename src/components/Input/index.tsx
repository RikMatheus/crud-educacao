import { StyledInput } from './styles'

type InputProps = {
    label: string,
    type: string,
    placeholder?: string,
}

export default function Input({ label, type, placeholder }: InputProps) {
    return (
        <StyledInput>
            <p>{ label }</p>
            <input type={ type } placeholder={ placeholder } />
        </StyledInput>
    )
}