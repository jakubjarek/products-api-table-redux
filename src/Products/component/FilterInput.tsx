import { InputAdornment, FormControl, OutlinedInput } from "@mui/material";
import { useState, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import useSearch from "../hooks/useSearch";

const INPUT_HTML_ID = "search-by-id";
const PARAM_KEY = "id";

const inputParser = z.number();

function FilterInput() {
  const { search, setSearch } = useSearch(PARAM_KEY);

  return (
    <FormControl fullWidth>
      <OutlinedInput
        sx={{ m: 0.25 }}
        size="small"
        startAdornment={<InputAdornment position="start">id</InputAdornment>}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id={INPUT_HTML_ID}
      />
    </FormControl>
  );
}

export default FilterInput;
