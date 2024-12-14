import IntroSection from "../components/homepage/introSection";
import CarouselCustomArrows from "../components/homepage/carousel";
import Tjenester from "../components/homepage/tjenester";
import SectionTwo from "../components/homepage/sectionTwo";

export default function indexPage() {
  return (
    <>
      <CarouselCustomArrows />
      <IntroSection />
      <Tjenester />
      <SectionTwo/>
    </>
  );
}
