import Button from "@mui/material/Button";
import style from "../Styles/Menu.module.css";
import SearchField from "./SearchField.tsx";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu.tsx";
import Switch from "@mui/material/Switch";
import { Card } from "@mui/material";
import { useContext } from "react";
import { appContext } from "../App.tsx";
type MenuProps = {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  selectedItem:  string |null;
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
  return (
    <>
      <Card className={style["menu"]}>
        <h1 className={style["txt-color"]}>Fake Store</h1>
        <div className={style["element"]}>
          <Button className={style["txt-color"]}>Cart</Button>
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
