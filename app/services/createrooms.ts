import { ammenitiesTypes, plansTypes } from "@/app/db/habitaciones";
import { Ammenities, ImagesRoom, Plans, Rooms } from "@/app/types";
import { createArray, generateRandomNumber } from "@/app/utils";

export class CreateRooms {
  private countRooms: number;
  private rooms: Rooms[] | null = null;
  private ammenities: Ammenities[] | [] = [];
  private images: ImagesRoom[] | [] = [];
  private plans: Plans[] | [] = [];

  constructor(rooms: number) {
    this.countRooms = rooms;
  }

  private setImages() {
    const imagesList = createArray(generateRandomNumber(4));
    return (this.images = imagesList.map((image) => {
      return {
        id: image,
        url: `/${generateRandomNumber(18)}.jpg`,
        description: "Lorem impusm",
      };
    }));
  }

  private setPlans() {
    const setList = createArray(generateRandomNumber(plansTypes.length));
    return (this.plans = setList.map((plan) => {
      return plansTypes[plan];
    }));
  }

  private setAmmenities() {
    const AmmenitiesItems = createArray(
      generateRandomNumber(ammenitiesTypes.length),
    );
    return (this.ammenities = AmmenitiesItems.map((ammenity) => {
      return ammenitiesTypes[ammenity];
    }));
  }

  public setRooms() {
    const setList = createArray(this.countRooms);
    return (this.rooms = setList.map((room) => {
      return {
        id: room + 1,
        name: `Habitación ${room + 1}`,
        description: `Room ${room + 1} description`,
        book_code: generateRandomNumber(1000),
        book_pms: generateRandomNumber(1000),
        book_units: generateRandomNumber(10),
        persons: {
          adults: generateRandomNumber(5),
          children: generateRandomNumber(5, 0),
          puppets: generateRandomNumber(3, 0),
        },
        plans: this.setPlans(),
        ammenities: this.setAmmenities(),
        images: this.setImages(),
      };
    }));
  }
}
