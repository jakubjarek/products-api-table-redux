import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSearch(key: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = searchParams.get(key) || "";
    if (query) {
      setSearchParams({ search });
      setSearch(search);
    }
  }, [search]);


  return { search, setSearch };
}
