import type { Review } from "../types";

import shellyRussel from "../assets/reviewImages/shelly-russel.png";
import lulaRolfson from "../assets/reviewImages/lula-rolfson.png";
import carolHale from "../assets/reviewImages/carol-hale.png";

export const reviews: Review[] = [
  {
    id: 1,
    name: "Shelly Russel",
    rating: 4.5,
    image: shellyRussel,
    comment:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    rating: 4.5,
    image: lulaRolfson,
    comment:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: "Carol Hale",
    rating: 4.5,
    image: carolHale,
    comment: `It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!`,
  },
];
