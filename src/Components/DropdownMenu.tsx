import "../Styles/Dropdown.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
type MenuProps = {
  selectedItem: string | null;
  setSelectedItem: (selected: string | null) => void;
};

function DropdownMenu({ selectedItem, setSelectedItem }: MenuProps) {
  const category = [
    { name: "electronics" },
    { name: "jewelery" },
    { name: "men's clothing" },
    { name: "women's clothing" },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (select: string) => {
    setSelectedItem(select);
    handleClose();
  };
  console.log(selectedItem);
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // onChange={(e) => {
        //   e.target.value;
        // }}
      >
        {category.map((item) => (
          <MenuItem onClick={() => handleSelectItem(item.name)} key={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
export default DropdownMenu;
