import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import style from "../Styles/SearchField.module.css";
interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField className={style.searchinput}
        id="search"
        label="Search"
        variant="filled"
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchField;
