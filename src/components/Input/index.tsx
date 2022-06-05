import { StyledInput } from './styles'

type InputProps = {
    label: string,
    type: string,
    placeholder?: string,
    errorMessage?: string
    required?: boolean,
    pattern?: string,
    onChange?: (e: any) => void
}

export default function Input({ label, type, placeholder, errorMessage, required, pattern, onChange }: InputProps) {
    return (
        <StyledInput onChange={ onChange }>
            <p>{ label }</p>
            <input type={ type } placeholder={ placeholder } required={ required } pattern={ pattern } />
            <span>{ errorMessage }</span>
        </StyledInput>
    )
}