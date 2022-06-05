import styled from 'styled-components'
import { theme } from '../../theme'

export const StyledInput = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;

    :last-child {
        margin-bottom: 0;
    }

    p {
        font-size: ${theme.fonts.base};
        margin-bottom: .5rem;
    }

    input {
        width: 100%;
        padding: .5rem;
        border: 1px solid #ccc;
        border-radius: .25rem;

        ::placeholder {
            font-size: ${theme.fonts.base};
        }
    }
`