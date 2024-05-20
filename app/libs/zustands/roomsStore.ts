import { Rooms } from "@/app/types";
import { createWithEqualityFn } from "zustand/traditional";

export interface RoomsStore {
  rooms: Rooms[];
  setRooms: (rooms: Rooms[]) => void;
}

export const roomsStore = createWithEqualityFn<RoomsStore>((set) => ({
  rooms: [],
  setRooms: (newRooms: Rooms[]) =>
    set((state) => ({ ...state, rooms: newRooms })),
}));
