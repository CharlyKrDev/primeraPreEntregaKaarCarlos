import { Item } from "./Item";
import { ItemCart } from "./ItemCart";

export const ItemList = ({ productos, plantilla }) => {
  return (
    <>
      {plantilla === "Item"
        ? productos.map((prods) => <Item key={prods.id} prod={prods} />)
        : productos.map((prods) => <ItemCart key={prods.id} prod={prods} />)}
    </>
  );
};
