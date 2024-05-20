import { ReactElement, ReactNode } from "react";

export interface Ammenities {
  id: number;
  ammenity_name: string;
  ammenity_description: string;
  ammenity_icon: string;
  ammenity_status: boolean;
}

export interface Plans {
  id: number;
  plan_name: string;
  prices: {
    lower_price: number;
    upper_price: number;
    base_price: number;
    currency: string;
  };
}

export interface ImagesRoom {
  id: number;
  url: string;
  description: string;
}
export interface Persons {
  adults: number;
  children: number | null;
  puppets: number | null;
}

export interface Rooms {
  id: number;
  name: string;
  description: string;
  book_code: number;
  book_pms: number;
  book_units: number;
  plans: Plans[];
  ammenities: Ammenities[];
  images: ImagesRoom[];
  persons: Persons;
}
export interface ModalContent {
  isOpen: boolean;
  modal: {
    title: string;
    content: ReactElement | ReactNode;
    footer: ReactElement | ReactNode;
    size: string;
  };
}
export interface ModalStore extends ModalContent {
  setModal: (ModalContent) => void;
  setIsOpen: (ModalContent) => void;
}
