import { ReactNode } from "react";
import "../Styles/ContentGrid.css";
import Item from "./Item";
import { Card } from "@mui/material";
type contentGridProps = { title?: string; children: ReactNode };
function ContentGrid({ title = "List", children }: contentGridProps) {
  return (
    <>
      <Card className="content">
        <h2>{title}</h2>
        <table className="content-header">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </table>
        {/* <span>Title</span>
          <span>Category</span>
          <span>Price</span>
          <span>Description</span> */}
        {children}
      </Card>
    </>
  );
}
export default ContentGrid;
