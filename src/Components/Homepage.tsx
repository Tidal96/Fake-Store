import Menu from "./Menu";
import Item from "./Item";
import { useEffect, useState } from "react";
import ContentGrid from "./ContentGrid";

function Homepage() {
  interface DataItem {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
    description: string;
  }
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState<DataItem[]>([]);
  async function fetchProduct() {
    try {
      const response = await fetch("https://api.example.com/products");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(selectedItem);
  return (
    <>
      <Menu
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      ></Menu>
      <ContentGrid title="ListOfProducts">
        {data
          .filter(
            (row) =>
              row.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
              (row.category === selectedItem || selectedItem === null)
          )
          .map((row) => (
            <Item
              img={row.image}
              title={row.title}
              category={row.category}
              price={row.price}
              description={row.description}
              showRemoveIcon={false}
            ></Item>
          ))}
        {/* <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item> */}
      </ContentGrid>
    </>
  );
}
export default Homepage;
