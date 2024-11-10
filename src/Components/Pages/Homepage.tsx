import Menu from "../Molecule/Menu";
import Item from "../Item";
import { useState, useEffect } from "react";
import ContentGrid from "../ContentGrid";
interface DataItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
function Homepage() {
  const [error, setError] = useState(null);
  const [data, setData] = useState<DataItem[]>([]);
  async function fetchProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const products = await response.json(); // Parse the response as JSON
      setData(products); // Update state with fetched product data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

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
              id={row.id}
              data={[]}
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
