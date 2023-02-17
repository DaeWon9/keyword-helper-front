import {
  Icon,
  ChannelBtnSmileFilledIcon,
  IconSize,
  HStack,
  StackItem,
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
} from "@channel.io/bezier-react";
import "./KeywordBox.css";

const Colors = [
  "Blue",
  "Red",
  "Green",
  "Cobalt",
  "Orange",
  "Pink",
  "Purple",
  "MonochromeLight",
  "MonochromeDark",
];

const customColors = [
  "#CDCBFA",
  "#C1E0F9",
  "#B6E8E4",
  "#BEE5C9",
  "#E2E2C4",
  "#F8E9BE",
  "#FCDAB5",
  "#F7C9CC",
  "#EFC8E5",
  "#DECEF5",
  "#C2C8DD",
];

const KeywordBox = ({ colorID, text, style = {} }) => {
  return (
    <div className="keyword-box">
      <HStack justify="start">
        <StackItem>
          <Button
            leftContent={<Icon source={ChannelBtnSmileFilledIcon} size={IconSize.Normal} />}
            text={text}
            style={{ ...style, backgroundColor: customColors[colorID % customColors.length] }}
            styleVariant={ButtonStyleVariant.FloatingAlt}
          />
        </StackItem>
      </HStack>
    </div>
  );
};

export default KeywordBox;
