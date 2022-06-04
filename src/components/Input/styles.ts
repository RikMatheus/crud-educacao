import styled from 'styled-components'
import { theme } from '../../theme'

export const StyledInput = styled.div`
    width: 100%;
    box-sizing: border-box;

    p {
        font-size: ${theme.fonts.base};
        padding: 1rem 0;
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