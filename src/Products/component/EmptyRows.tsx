import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type EmptyTableRowsFallbackProps = {
  items: Array<unknown>;
  rowHeight: number;
  itemsPerPage: number;
};

export function EmptyTableRowsFallback({
  items,
  rowHeight,
  itemsPerPage,
}: EmptyTableRowsFallbackProps) {
  const emptySpaceHeight = rowHeight * (itemsPerPage - items.length);

  if (items.length === itemsPerPage) {
    return null;
  } else {
    return (
      <TableRow style={{ height: `${emptySpaceHeight}px` }}>
        <TableCell />
      </TableRow>
    );
  }
}
