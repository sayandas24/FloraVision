import heroImg from "../../assets/hero.webp";

export default function HeroBanner() {
  return (
    <img
      src={heroImg}
      alt="hero plant"
      decoding="async"
      className="absolute top-0 left-1/2 -translate-x-1/2 
      w-full object-cover -z-10 pointer-events-none
      min-w-[1545px]! min-[500px]:min-w-[1650px]! min-[600px]:min-w-[1230px]! min-[768px]:min-w-[1350px]! min-[820px]:min-w-[1200px]! min-[900px]:min-w-[1300px]! min-[960px]:min-w-[1350px]! min-[1024px]:min-w-[1450px]! min-[1100px]:min-w-[1590px]! min-[1280px]:min-w-[1680px]!
       "
    />
  );
}
