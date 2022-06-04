import styled, { css } from 'styled-components'
import { theme } from '../../theme'

export const StyledMenu = styled.aside`
    width: 20rem;
    height: 100vh;
    padding: 3rem 1rem;
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
`

export const StyledMenuButton = styled.button`
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: .25rem;
    background-color: inherit;
    color: ${theme.colors.background};
    font-size: ${theme.fonts.base};
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: background-color .2s ease;
    cursor: pointer;
    margin-top: .5rem;

    :hover {
        background-color: ${theme.colors.tertiary};
    }

    :first-child {
        margin-top: 0;
    }

    ${props => props.selected && css`
        background-color: ${theme.colors.tertiary};
    `};
`