import "../Styles/Item.css";
import BoxSx from "./Box";
type itemProps = { title: string; price: number };
function Item({ title, price }: itemProps) {
  return (
    <div className="content-item">
      <BoxSx />
          <span>Fjallraven-Foldsack N...</span>
          <span>men's clothing</span>
          <span>
            109.95<span className="txt-color">$</span>
          </span>
          <span>
            Your perfect pack for everyday use and walks in the forest...
          </span>
    </div>
  );
}
export default Item;
