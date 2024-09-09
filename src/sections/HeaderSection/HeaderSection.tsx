import { YLDecoratorImage } from "@/components/yl-layouts/yl-decorator-image/yl-decorator-image";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";

export default function HeaderSection() {
  return (
    <YLFlexContainer
      position="fixed"
      inlineSize="100%"
      blockSize="72px"
      zIndex="1000"
      backgroundColor="white"
      boxShadow="0px 3px 6px #00000030"
    >
      <YLDecoratorImage
        inlineSize="120px"
        blockSize="60px"
        backgroundImage={`url("/Logo.png")`}
      />
    </YLFlexContainer>
  );
}
