import SectionOneHero from "@/app/components/SectionOneHero";
import SectionTwoBook from "@/app/components/SectionTwoBook";
import SectionThreeBeat from "@/app/components/SectionThreeBeat";
import SectionFourBox from "@/app/components/SectionFourBox";
import SectionFiveFans from "@/app/components/SectionFiveFans";
import SectionSixSubscribe from "@/app/components/SectionSixSubscribe";
import PageAnimationWrapper from "@/app/components/PageAnimationWrapper";
import Nav from "./components/global/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <PageAnimationWrapper>
        <SectionOneHero />
        <SectionTwoBook />
        <SectionThreeBeat />
        <SectionFourBox />
        <SectionFiveFans />
        <SectionSixSubscribe />
      </PageAnimationWrapper>
    </>
    
  );
}
