import Menu from "./Menu.tsx";
import Content from "./Content.tsx";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Cart() {
  return (
    <>
    <h2>Cart</h2>
      <Menu />
      <Content>
        <DeleteOutlineIcon></DeleteOutlineIcon>
      </Content>
      
    </>
  );
}
export default Cart;
