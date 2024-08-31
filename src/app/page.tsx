import { YLDecoratorImage } from "@/components/yl-layouts/yl-decorator-image/yl-decorator-image";
import YlHeader from "@/components/yl-library/yl-header";
import BestOffersSection from "@/sections/BestOffersSection/BestOffersSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import WyChooseSection from "@/sections/WyChooseUsSection/WyChooseSection";

export default function Home() {
  return (
    <main>
      {/* <YlHeader
        desktop={
          <>
            <YLDecoratorImage
              inlineSize="120px"
              blockSize="80px"
              url="/logo.png"
            />
          </>
        }
        mobile={<></>}
      /> */}
      <HeroSection></HeroSection>
      <BestOffersSection></BestOffersSection>
      <WyChooseSection></WyChooseSection>
    </main>
  );
}
