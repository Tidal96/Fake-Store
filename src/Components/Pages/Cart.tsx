import Menu from "../Molecule/Menu";
import { useEffect, useState } from "react";
import ContentGrid from "../ContentGrid";
import Item from "../Item";
type Cartprops = {
  id: number;
  title: string;
  price: number;
  description: string;
};
function Cart() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [list, setList] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myArray") ?? "[]");
    setList(data);
  }, []);
  const removeItem = (index: number) => {
    const newList = list.filter((_, i) => i !== index);

    setList(newList);
    localStorage.setItem("myArray", JSON.stringify(newList));
  };

  return (
    <>
      <Menu
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      ></Menu>
      <ContentGrid title="Cart">
        {list
          .filter(
            (row: any) =>
              row.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
              (row.category === selectedItem || selectedItem === null)
          )
          .map((row: any, index: number) => (
            <Item
              img={row.image}
              title={row.title}
              category={row.category}
              price={row.price}
              description={row.description}
              showRemoveIcon={true}
              onDelete={() => removeItem(index)}
              id={row.id}
              data={[]}
            ></Item>
          ))}
      </ContentGrid>
    </>
  );
}
export default Cart;
