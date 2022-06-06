import styled from 'styled-components'
import { theme } from '../../../theme'

export const StyledCard = styled.div`
    background: #fff;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: .5rem;
    width: 100%;
    box-shadow: ${theme.shadows.sm};

    .card__title {
        font-size: 2rem;
        font-weight: medium;
        margin-bottom: 1rem;
    }
`