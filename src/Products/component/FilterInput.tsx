import { FormControl, TextField } from "@mui/material";
import { useState, ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../App/store";
import { ProductsAction } from "../store/products.action";

function FilterInput() {
  const dispatch: AppDispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setFilterValue("");
      dispatch(ProductsAction.debouncedGet(""));
      return;
    }

    dispatch(ProductsAction.debouncedGet(event.target.value));
    setFilterValue(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ marginTop: 1 }}>
      <TextField
        sx={{ m: 0.25 }}
        size="small"
        label="Id"
        value={filterValue}
        onChange={handleValueChange}
      />
    </FormControl>
  );
}

export default FilterInput;
