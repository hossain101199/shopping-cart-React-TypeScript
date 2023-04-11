import book from "./images/book.jpg";
import computer from "./images/computer.jpg";
import banana from "./images/banana.jpg";
import car from "./images/car.jpg";

interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  }
  
  export const storeItems: Product[] = [
    {
      id: 1,
      name: "Book",
      price: 10.99,
      imgUrl: book
    },
    {
      id: 2,
      name: "Computer",
      price: 1199,
      imgUrl: computer
    },
    {
      id: 3,
      name: "Banana",
      price: 1.05,
      imgUrl: banana
    },
    {
      id: 4,
      name: "Car",
      price: 14000,
      imgUrl: car
    }
  ];
  