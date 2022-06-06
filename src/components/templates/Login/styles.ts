import styled from 'styled-components'
import { theme } from '../../../theme'

export const StyledLogin = styled.main`
    background: #eee;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        width: 24rem;
    }

    button {
        margin-top: 1rem;

        &:first-of-type {
            margin-top: 2rem;
        }
    }
`

export const StyledForm = styled.form`
    margin-top: 2rem;

    .login__label {
        font-size: ${theme.fonts.base};
        margin-bottom: .5rem;
    }

    .login__error {
        padding: .5rem 1rem;
        margin-top: 1rem;
        border-radius: .25rem;
        font-size: ${theme.fonts.sm};
        background-color: ${theme.colors.error};
        color: ${theme.colors.background};
    }

    span {
        margin-top: .25rem;
        display: none;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    margin-bottom: 1rem;
    padding: .5rem;

    :last-of-type {
        margin-bottom: 0;
    }    

    :invalid:focus ~ span {
        display: block;
        font-size: ${theme.fonts.sm};
        color: ${theme.colors.error};
    }
`