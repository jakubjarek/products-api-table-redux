import TableRow from "@mui/material/TableRow";
import { TableFooter, TablePagination } from "@mui/material";
import paginationSelector from "../store/pagination/pagination.selector";

function Pagination() {
  const pagination = paginationSelector.base.hook();

  const handlePageChange = () => {};

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[]}
          rowsPerPage={pagination.per_page}
          count={pagination.total}
          page={pagination.page - 1}
          onPageChange={handlePageChange}
        />
      </TableRow>
    </TableFooter>
  );
}

export default Pagination;
