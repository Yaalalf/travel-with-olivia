import { IYLFlexContainerStyleProps } from "@/components/yl-layouts/yl-flex-container/types";
import YlFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { IYLTextStyleProps } from "@/components/yl-layouts/yl-text/types";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { IChildren, IEvent } from "@/components/yl-utils/yl-global-interfaces";

export default function YLCheap({
  children,
  cheapStyle,
  cheapTextStyle,
  onClick,
}: IYLCheapProps) {
  return (
    <YlFlexContainer
      {...defaultContainerValues}
      {...cheapStyle}
      onClick={onClick}
    >
      <YLText tag="span" {...defaultTextValues} {...cheapTextStyle}>
        {children}
      </YLText>
    </YlFlexContainer>
  );
}

/************************DefaultValues*********************/

const defaultContainerValues: IYLFlexContainerStyleProps = {
  border: "2px solid white",
  paddingInline: "12px",
  paddingBlock: "8px",
  borderRadius: "12px",
};

const defaultTextValues: IYLTextStyleProps = {
  color: "white",
  fontFamily: "Inter",
  fontSize: "14px",
};
/************************Types*********************/

export interface IYLCheapProps extends Partial<IChildren>, IEvent {
  cheapStyle?: IYLFlexContainerStyleProps;
  cheapTextStyle?: IYLTextStyleProps;
}
