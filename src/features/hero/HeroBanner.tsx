import heroImg from "../../assets/hero.png";

export default function HeroBanner() {
  return (
    <img
      src={heroImg}
      alt="hero plant"
      className="w-full absolute top-0 left-0 -z-10"
    />
  );
}
