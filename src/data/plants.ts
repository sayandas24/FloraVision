import type { Plant, TrendyPlant } from "../types";

import plantImage2 from "../assets/plants/plant-image2.png";
import plantImage3 from "../assets/plants/plant-image3.png";
import aglaonemaPlant from "../assets/plants/top-selling/aglaonema-plant.png";
import plantainLilies from "../assets/plants/top-selling/plantain-lilies.png";
import cactus from "../assets/plants/top-selling/cactus.png";
import swissCheesePlant from "../assets/plants/top-selling/swiss-cheese-plant.png";
import sansevieriaPlant from "../assets/plants/top-selling/sansevieria-plant.png";
import agavePlant from "../assets/plants/top-selling/agave-plant.png";

export const trendyPlants: TrendyPlant[] = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: 599,
    image: plantImage2,
    imageReverse: true,
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: 399,
    image: plantImage3,
    imageReverse: false,
  },
];

export const topSellingPlants: Plant[] = [
  {
    id: 3,
    name: "Aglaonema plant",
    description:
      "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: 300,
    image: aglaonemaPlant,
  },
  {
    id: 4,
    name: "Plantain Lilies",
    description:
      "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes",
    price: 380,
    image: plantainLilies,
  },
  {
    id: 5,
    name: "Cactus",
    description:
      "It is known for their ability to thrive in arid environments.",
    price: 259,
    image: cactus,
  },
  {
    id: 6,
    name: "Swiss cheese Plant",
    description:
      "It is a popular tropical houseplant known for its distinctive, perforated leaves.",
    price: 400,
    image: swissCheesePlant,
  },
  {
    id: 7,
    name: "Sansevieria plant",
    description:
      "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: 450,
    image: sansevieriaPlant,
  },
  {
    id: 8,
    name: "Agave plant",
    description:
      "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: 359,
    image: agavePlant,
  },
];
