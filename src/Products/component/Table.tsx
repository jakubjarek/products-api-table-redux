import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
} from "@mui/material";
import useMountedSearchParams from "../hooks/useMountedSearchParams";
import { ItemsSelectorHooks } from "../store/items/items.slice";
import { EmptyTableRowsFallback } from "./EmptyRows";
import FilterInput from "./FilterInput";
import Pagination from "./Pagination";

const ROW_HEIGHT = 53;
const ITEMS_PER_PAGE = 5;

function ProductsTable() {
  const items = ItemsSelectorHooks.useGetAll();

  void useMountedSearchParams();

  if (items.length < 1) {
    return <h1>loading... ⏰</h1>;
  }

  return (
    <Paper sx={{ width: "666px" }}>
      <FilterInput />
      <TableContainer component="div">
        <Table>
          {/* head */}
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">year</TableCell>
            </TableRow>
          </TableHead>
          {/* body */}
          <TableBody>
            {items &&
              items.map(({ id, color, name, year }) => (
                <TableRow key={id} style={{ backgroundColor: color }}>
                  <TableCell sx={{ width: "30%" }} component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell sx={{ width: "40%" }} align="right">
                    {name}
                  </TableCell>
                  <TableCell sx={{ width: "30%" }} align="right">
                    {year}
                  </TableCell>
                </TableRow>
              ))}
            <EmptyTableRowsFallback
              items={items}
              rowHeight={ROW_HEIGHT}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </TableBody>
          {/* pagination */}
          <Pagination />
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ProductsTable;
