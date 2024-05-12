import "../Styles/Item.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
type itemProps = {
  img: string;
  title: string;
  category: string;
  price: number;
  description: string;
  showRemoveIcon?: boolean;
};
function Item({
  img,
  title,
  category,
  price,
  description,
  showRemoveIcon,
}: itemProps) {
  return (
    <>
      <table className="content-item">
        <tr>
          <td>
            {" "}
            <img src={img} alt={title} />
          </td>
          <td>{title}</td>
          <td>{category}</td>
          <td>
            {price}
            <span className="txt-color">$</span>
          </td>
          <td>{description}</td>
          <td>{showRemoveIcon && <DeleteOutlineIcon></DeleteOutlineIcon>}</td>
        </tr>
      </table>
    </>
  );
}
export default Item;
