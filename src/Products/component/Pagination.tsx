import TableRow from "@mui/material/TableRow";
import { TableFooter, TablePagination } from "@mui/material";
import paginationSelector from "../store/pagination/pagination.selector";
import { useSearchParams } from "react-router-dom";

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pagination = paginationSelector.base.hook();

  const handlePageChange = (event: any, newPage: number) => {
    setSearchParams((prev) => ({ ...prev, page: newPage + 1 }));
  };

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
