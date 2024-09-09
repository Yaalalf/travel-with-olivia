import YLBackgroundContainer from "@/components/yl-web-landing-page/yl-background-container/yl-background-container";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import YlHeader from "@/components/yl-library/yl-header";
import { EYLMediaQueryBreakPoints } from "@/components/yl-utils/yl-global-enums";
import {
  IChildren,
  IClassName,
  IText,
} from "@/components/yl-utils/yl-global-interfaces";
import YLTitleHeaderDoubleText from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text/yl-title-header-double-text";

export default function YLBackgroundTitleSection({
  className,
  children,

  primaryText,
  secondaryText,
  imageUrl,
  blockSize,
}: IYLBackgroundTitleSectionProps) {
  return (
    <YLBackgroundContainer
      className={className || ""}
      imgUrl={imageUrl}
      blockSize={blockSize || "680px"}
      flexContainerStyle={{
        tag: "section",
        flexDirection: "column",
        mediaQuery: {
          "360-1024": { blockSize: "400px" },
        },
      }}
      backgroundColorStyle={{ opacity: "0.1" }}
    >
      <YLFlexContainer inlineSize="900px" flexDirection="column">
        <YLTitleHeaderDoubleText
          textAlign="center"
          primaryText={primaryText}
          primaryTitleStyle={{
            order: "1",
            textShadow: "0px 3px 6px #00000050",
            color: "white",
          }}
          secondaryText={secondaryText}
          secondaryTitleStyle={{
            tag: "h2",
            textShadow: "0px 3px 6px #00000050",
            color: "white",
          }}
          containerStyle={{
            mediaQuery: { "360-1024": { paddingInline: "20px" } },
          }}
        />
        <YLText>
          Descubre Cuba con la comodidad de un alojamiento excepcional. Con
          nuestra agencia de viajes, reservar tu hotel es más fácil que nunca.
          Ofrecemos una amplia selección de hoteles en los mejores destinos de
          la isla, desde La Habana hasta Varadero, con opciones que se ajustan a
          todos los presupuestos y preferencias. No esperes más para planear tu
          viaje de ensueño. ¡Reserva tu hotel en Cuba hoy y vive una experiencia
          inolvidable!
        </YLText>
      </YLFlexContainer>
      <YLContainer>{children}</YLContainer>
    </YLBackgroundContainer>
  );
}

export interface IYLBackgroundTitleSectionProps
  extends IClassName,
    Partial<IChildren> {
  primaryText?: string;
  secondaryText?: string;
  imageUrl?: string;
  blockSize?: string;
}
