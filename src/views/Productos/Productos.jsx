import Cards from "../../components/Cards/Cards";
import Testimonios from "../../components/Testimonios/Testimonios";

const InfoCard = [
  {
    title: "Creature",
    img: "./src/assets/ate-creatures.png",
    price: "6.99",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
    id: "01",
  },
  {
    title: "Sci-Fi Robot Movements",
    img: "./src/assets/sci-fi-robotmovement.png",
    price: "6.99",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
    id: "02",
  },
  {
    title: "Creature",
    img: "./src/assets/ate-creatures.png",
    price: "6.99",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
    id: "03",
  },
  {
    title: "Sci-Fi Robot Movements",
    img: "./src/assets/sci-fi-robotmovement.png",
    price: "6.99",
    description:
      "Some quick example text to build on the card title and make up the bulk of the cards content",
    id: "04",
  },
];

export default function Productos() {
  return (
    <>
      <Cards InfoCards={InfoCard} />
      <Testimonios />
    </>
  );
}
