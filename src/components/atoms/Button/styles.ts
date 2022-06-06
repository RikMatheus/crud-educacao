import styled, { css } from 'styled-components'
import { theme } from "../../../theme"

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: 100%;
    padding: .5rem 1rem;
    text-align: center;
    border: none;
    border-radius: .25rem;
    font-size: ${theme.fonts.base};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background};
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.tertiary};
    }

    ${props => props.variant == "outline" && css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.background};
        }
    `};
`