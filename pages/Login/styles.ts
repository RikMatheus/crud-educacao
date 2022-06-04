import styled from 'styled-components'

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