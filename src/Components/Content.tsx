import "../Styles/Content.css";
import Item from "./Item";
type contentGridProps = { title?: string };
function ContentGrid({ title = "List" }: contentGridProps) {
  return (
    <>
      <div className="content">
        <h2>{title}</h2>
        <div className="content-header">
          <span>Title</span>
          <span>Category</span>
          <span>Price</span>
          <span>Description</span>
        </div>
        <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item>
        <Item title={title} price={1}></Item>
      </div>
    </>
  );
}
export default ContentGrid;
