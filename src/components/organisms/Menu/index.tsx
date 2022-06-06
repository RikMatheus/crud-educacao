import { useContext } from 'react'
import { LogOut } from 'react-feather'

import { AuthContext, LoggedUserType } from "../../../contexts/AuthContext"
import { StyledMenu, StyledMenuButton, StyledLogoutButton } from "./styles"

type MenuProps = {
    items: Array<Object>,
    selected: Number,
    user: LoggedUserType,
    handleSelection: (key: Number) => void,
}

export default function Menu ({ items, selected, user, handleSelection }: MenuProps) {
    const { signOut } = useContext(AuthContext) 

    const handleSignOut = async () => {
        await signOut()
    }

    return (
        <StyledMenu>
            {
                items.map((item, key) => 
                    <StyledMenuButton
                        key={key}
                        selected={key === selected}
                        onClick={() => handleSelection(key)} 
                    >
                        { item.icon } { item.title }
                    </StyledMenuButton>)
            }
            {
                user && 
                    <StyledLogoutButton onClick={ handleSignOut } data-test-id="logout-button">
                        <div className="user__content">
                            <h5 className="user__name">{ user?.name }</h5>
                            <p className="user__email">{ user?.email }</p>
                        </div>
                        <div className="user__logout">
                            <LogOut />
                            <span>Sair</span>
                        </div>
                    </StyledLogoutButton>
            }
        </StyledMenu>
    )
}
