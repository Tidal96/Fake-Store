import Button from "@mui/material/Button";
import style from "../Styles/Menu.module.css";
import SearchField from "./SearchField.tsx";
import Switch from "@mui/material/Switch";
import { useState } from "react";
function Menu() {
  const [state, setState] = useState(false);
  const handleChange = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <div className={style.menu}>
      <h1 className={style["txt-color"]}>Fake Store</h1>
      <div className={style["element"]}>
        <Button className={style["txt-color"]}>Cart</Button>
        <Button className={style["txt-color"]}>Categories</Button>
        <Switch checked={state} onChange={handleChange} />
        <SearchField />
      </div>
    </div>
  );
}
export default Menu;
