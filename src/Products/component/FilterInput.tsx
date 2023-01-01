import { InputAdornment, FormControl, OutlinedInput } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const INPUT_HTML_ID = "search-by-id";
const PARAM_KEY = "id";

const inputParser = z.number();

function FilterInput() {
  const [filterValue, setFilterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = inputParser.parse(event.target.value);

    setFilterValue(parsedValue);

    if (!event.target.value) {
      searchParams.delete(PARAM_KEY);
      setSearchParams(searchParams);
      return;
    }

    setSearchParams((prev) => ({
      ...prev,
      [PARAM_KEY]: event.target.value,
    }));
  };

  return (
    <FormControl fullWidth>
      <OutlinedInput
        sx={{ m: 0.25 }}
        size="small"
        startAdornment={<InputAdornment position="start">id</InputAdornment>}
        value={filterValue}
        onChange={handleValueChange}
        id={INPUT_HTML_ID}
      />
    </FormControl>
  );
}

export default FilterInput;
