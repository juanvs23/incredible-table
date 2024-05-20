import { useState } from "react";
import sortArray from "sort-array";
import { Rooms } from "../types";
import { store } from "../libs";

export default function useFilter() {
  const [sortOrderByCode, setSortOrderByCode] = useState("asc");
  const [sortOrderByPms, setSortOrderByPms] = useState("asc");
  const [sortOrderByName, setsortOrderByName] = useState("asc");

  const { rooms, setRooms } = store.roomsStore();

  const handlerSortOrderByName = () => {
    setSortOrderByCode("asc");
    setSortOrderByPms("asc");
    if (sortOrderByName === "asc") {
      setRooms(sortArray(rooms, { by: "name", order: "asc" }));
      setsortOrderByName("desc");
    } else {
      setRooms(sortArray(rooms, { by: "name", order: "desc" }));
      setsortOrderByName("asc");
    }
  };

  const handlerSortOrderByCode = () => {
    setsortOrderByName("asc");
    setSortOrderByPms("asc");
    if (sortOrderByCode === "asc") {
      setRooms(sortArray(rooms, { by: "book_code", order: "desc" }));
      setSortOrderByCode("desc");
    } else {
      setRooms(sortArray(rooms, { by: "book_code", order: "asc" }));
      setSortOrderByCode("asc");
    }
  };

  const handlerSortOrderByPms = () => {
    setsortOrderByName("asc");
    setSortOrderByCode("asc");
    if (sortOrderByPms === "asc") {
      setRooms(sortArray(rooms, { by: "book_pms", order: "desc" }));
      setSortOrderByPms("desc");
    } else {
      setRooms(sortArray(rooms, { by: "book_pms", order: "asc" }));
      setSortOrderByPms("asc");
    }
  };

  return {
    sortOrderByCode,
    sortOrderByPms,
    sortOrderByName,
    handlerSortOrderByName,
    handlerSortOrderByCode,
    handlerSortOrderByPms,
  };
}
