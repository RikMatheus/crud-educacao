import { useContext, useState } from 'react';
import { Home, BookOpen, Users } from 'react-feather';

import Menu from "../../organisms/Menu"
import Card from '../../molecules/Card';
import UsersComponent from '../../organisms/Users';

import { StyledDashboard, StyledContent } from './styles'
import { AuthContext } from '../../../contexts/AuthContext';

export default function Dashboard () {
    const { loggedUser } = useContext(AuthContext)
    const [ currentItem, setCurrentItem ] = useState<number>(0);

    const items = [
        {
            title: "Início",
            icon: <Home />,
            component: <Card children={<p>Seja bem vindo, { loggedUser?.name }!</p>} title="Início"/> 
        },
        {
            title: "Usuários",
            icon: <Users />,
            component: <UsersComponent />
        },
    ]
    
    const handleSelection = (key: Number) => {
        setCurrentItem(key)
    }

    return (
        <StyledDashboard>
            <Menu
                items={items}
                handleSelection={handleSelection}
                selected={currentItem}
                user={loggedUser}
            />
            <StyledContent>
                {
                    items[currentItem].component
                }
            </StyledContent>
        </StyledDashboard>
    )
}