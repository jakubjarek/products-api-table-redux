import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Paper,
} from "@mui/material";
import useEmptyRows from "../hooks/useEmptyRows";
import useMountedSearchParams from "../hooks/useMountedSearchParams";
import itemsSelector from "../store/items/items.selector";
import FilterInput from "./FilterInput";
import Pagination from "./Pagination";

function ProductsTable() {
  const items = itemsSelector.list.hook();
  const emptyRows = useEmptyRows();

  useMountedSearchParams();

  if (items.length < 1) {
    return <h1>loading...</h1>;
  }

  return (
    <Paper sx={{ width: "666px" }}>
      <FilterInput />
      <TableContainer component="div">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items &&
              items.map(({ id, color, name, year }) => (
                <TableRow key={id} sx={{ backgroundColor: color }}>
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
            {emptyRows}
          </TableBody>
          <Pagination />
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ProductsTable;
