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
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    border: 1px solid ${theme.colors.secondary};
    box-shadow: ${theme.shadows.sm};

    .users__form-inputs {
        display: flex;
        gap: 1rem;
    }

    .users__form-actions {
        display: flex;
        justify-content: flex-end;
        gap: .5rem;

        button {
            max-width: fit-content;
        }
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