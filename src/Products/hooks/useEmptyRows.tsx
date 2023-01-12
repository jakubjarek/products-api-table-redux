import { TableCell, TableRow } from "@mui/material";
import itemsSelector from "../store/items/items.selector";

const ROW_HEIGHT = 53;
const ITEMS_PER_PAGE = 5;

export default function useEmptyRows() {
  const items = itemsSelector.list.hook();

  const itemsLength = items.length;
  const missingRowsCount = ITEMS_PER_PAGE - itemsLength;

  if (itemsLength < ITEMS_PER_PAGE) {
    return (
      <TableRow style={{ height: `${ROW_HEIGHT * missingRowsCount}px` }}>
        <TableCell />
      </TableRow>
    );
  } else {
    return null;
  }
}
