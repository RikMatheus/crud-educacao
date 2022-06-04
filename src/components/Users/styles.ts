import styled from 'styled-components'
import { theme } from '../../theme'

export const StyledUsers = styled.div`
    .users__header {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 3rem;
    }

    .users__action {
        margin-left: auto;
    }

    .users__title {
        font-size: ${theme.fonts.exl};
        font-weight: bold;
    }
`

export const StyledForm = styled.form`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    border: 1px solid ${theme.colors.secondary};
    box-shadow: ${theme.shadows.sm};

    .users__form-inputs {
        width: 75%;
    }

    .users__form-actions {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: .5rem;
    }
`

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: ${theme.shadows.sm};

    td, th {
        text-align: start;
        padding: 1rem;
    }

    td {
        border-bottom: 1px solid ${theme.colors.secondary};
    }

    tr:first-child {
        background-color: ${theme.colors.secondary};
    }

    td:last-child {
        font-weight: bolder;
        color: ${theme.colors.primary};
    }
`