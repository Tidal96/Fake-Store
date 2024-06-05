import Button from "@mui/material/Button";
import style from "../../Styles/Menu.module.css";
import SearchField from "../SearchField.tsx";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu.tsx";
import Switch from "@mui/material/Switch";
import { Card, Typography } from "@mui/material";
import { useContext } from "react";
import { appContext } from "../../App.tsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
type MenuProps = {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  selectedItem: string | null;
  setSelectedItem: (selected: string | null) => void;
};
function Menu({
  searchQuery,
  setSearchQuery,
  selectedItem,
  setSelectedItem,
}: MenuProps) {
  // const [state, setState] = useState(false);
  // const handleChange = () => {
  //   if (state === false) {
  //     setState(true);
  //   } else {
  //     setState(false);
  //   }
  // }

  const { darkMode, toggleDarkMode } = useContext(appContext);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  // we getting the needed property from the returned object by useLocation()
  const { pathname } = useLocation();
  return (
    <>
      <Card className={style["menu"]}>
        <Typography variant={"h3"} color={"primary"}>Fake Store</Typography>
        <div className={style["element"]}>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          {pathname !== "/cart" && (
            <Link to="/cart">
              <Button className={style["txt-color"]}>Cart</Button>
            </Link>
          )}

          <div className={style["category-container"]}>
            <DropdownMenu
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            ></DropdownMenu>
          </div>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <SearchField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </Card>
    </>
  );
}
export default Menu;
