import { StyledMenu, StyledMenuButton } from "./styles"

type MenuProps = {
    items: Array<Object>,
    selected: Number,
    handleSelection: (key: Number) => void,
}

export default function Menu ({ items, selected, handleSelection }: MenuProps) {
    

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
        </StyledMenu>
    )
}
