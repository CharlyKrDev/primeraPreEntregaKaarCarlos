import { Item } from "./Item";


export const ItemList = ({ productos }) => {




    return (
        <>
            {productos.map(prods => <Item key={prods.id} prod={prods} />)}

        </>
    )
}
