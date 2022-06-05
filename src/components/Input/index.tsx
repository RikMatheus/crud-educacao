import { StyledInput } from './styles'

type InputProps = {
    label: string,
    type: string,
    placeholder?: string,
    onChange?: (e: any) => void
}

export default function Input({ label, type, placeholder, onChange }: InputProps) {
    return (
        <StyledInput onChange={ onChange }>
            <p>{ label }</p>
            <input type={ type } placeholder={ placeholder } />
        </StyledInput>
    )
}