import PageOne from "@/app/components/PageOne";
import PageTwo from "@/app/components/PageTwo";
import PageThree from "@/app/components/PageThree";
import PageFour from "@/app/components/PageFour";
import PageFive from "@/app/components/PageFive"
import PageAnimationWrapper from "@/app/components/PageAnimationWrapper";
import Nav from "./components/global/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <PageAnimationWrapper>
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
      </PageAnimationWrapper>
    </>
    
  );
}
