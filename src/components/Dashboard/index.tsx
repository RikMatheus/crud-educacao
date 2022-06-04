import { useState } from 'react';
import { Home, BookOpen, Users } from 'react-feather';

import Menu from "../Menu"
import Card from '../Card';

import { StyledDashboard, StyledContent } from './styles'

const items = [
    {
        title: "Início",
        icon: <Home />,
        component: <Card children={<p>Seja bem vindo, Matheus!</p>} title="Inicio"/>
    },
    {
        title: "Cursos",
        icon: <BookOpen />,
        component: <Card children={<p>Aqui estarão as funcionalidades relacionadas à cursos</p>} title="Cursos"/>
    },
    {
        title: "Usuários",
        icon: <Users />,
        component: <Card children={<p>Aqui estarão as funcionalidades relacionadas à usuários</p>} title="Usuários"/>
    },
]

export default function Dashboard () {
    const [ currentItem, setCurrentItem ] = useState<number>(0);
    
    const handleSelection = (key: Number) => {
        setCurrentItem(key)
    }

    return (
        <StyledDashboard>
            <Menu items={items} handleSelection={handleSelection} selected={currentItem}/>
            <StyledContent>
                {
                    items[currentItem].component
                }
            </StyledContent>
        </StyledDashboard>
    )
}