import { useState } from 'react';
import { Home, BookOpen, Users } from 'react-feather';

import Menu from "../Menu"
import Card from '../Card';
import UsersComponent from '../Users';

import { StyledDashboard, StyledContent } from './styles'

const items = [
    {
        title: "Início",
        icon: <Home />,
        component: <Card children={<p>Seja bem vindo!</p>} title="Seja bem vindo!"/> 
    },
    {
        title: "Cursos",
        icon: <BookOpen />,
        component: <Card children={<p>Aqui estarão as funcionalidades relacionadas à cursos</p>} title="Cursos"/>
    },
    {
        title: "Usuários",
        icon: <Users />,
        component: <UsersComponent />
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