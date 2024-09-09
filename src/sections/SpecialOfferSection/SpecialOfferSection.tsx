import YLTwoHTIInvert from "@/components/yl-content-structure/yl-two-hti-invert/yl-two-hti-invert";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLTitleHeaderDoubleTextDecoratorPhantomText from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text-decorator-phantom-text/yl-title-header-double-text-decorator-phantom-text";

export default function SpecialOfferSection() {
  return (
    <>
      <YLFlexContainer
        inlineSize="100%"
        flexDirection="column"
        paddingBlockStart="40px"
      >
        <YLTitleHeaderDoubleTextDecoratorPhantomText></YLTitleHeaderDoubleTextDecoratorPhantomText>

        <YLTwoHTIInvert />
      </YLFlexContainer>
    </>
  );
}
