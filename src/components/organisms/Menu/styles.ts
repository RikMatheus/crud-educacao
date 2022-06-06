import styled, { css } from 'styled-components'
import { theme } from '../../../theme'

export const StyledMenu = styled.aside`
    display: flex;
    flex-direction: column;
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

export const StyledLogoutButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: auto;
    padding: 1rem;
    border: 4px solid ${theme.colors.tertiary};
    border-radius: .25rem;
    background-color: ${theme.colors.tertiary};
    color: ${theme.colors.background};
    transition: all .2s ease;
    cursor: pointer;

    :hover {
        background-color: ${theme.colors.error};
    }

    .user__name {
        font-size: ${theme.fonts.lg};
    }

    .user__email {
        font-size: ${theme.fonts.sm};
    }

    .user__content {
        flex-grow: 1;
        text-align: start;
    }

    .user__logout {
        display: flex;
        flex-direction: column;
    }
`