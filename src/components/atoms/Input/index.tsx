import { StyledInput } from './styles'

type InputProps = {
    label: string,
    type: string,
    placeholder?: string,
    errorMessage?: string
    required?: boolean,
    pattern?: string,
    value?: string,
    onChange?: (e: any) => void
}

export default function Input({ label, type, placeholder, errorMessage, required, pattern, value, onChange }: InputProps) {
    return (
        <StyledInput onChange={ onChange }>
            <p>{ label }</p>
            <input type={ type } value={ value } placeholder={ placeholder } required={ required } pattern={ pattern } />
            <span>{ errorMessage }</span>
        </StyledInput>
    )
}