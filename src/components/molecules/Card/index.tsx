import { StyledCard } from './styles'

type CardProps = {
    children: React.ReactNode,
    title: string,
}

export default function Card ({title, children }: CardProps) {
    return (
        <>
            <StyledCard>
                <h1 className='card__title'>{ title }</h1>
                { children }
            </StyledCard>
        </>
    )
}