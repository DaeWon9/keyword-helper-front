import {
  Modal,
  ModalTrigger,
  Button,
  ButtonStyleVariant,
  Icon,
  ChannelBtnSmileFilledIcon,
  IconSize,
} from "@channel.io/bezier-react";
import KeywordPopup from "./KeywordPopup";
import customColors from "../CustomColors";

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

const KeywordBox = ({ colorID, keyword, description, buttonStyle = {} }) => {
  colorID = colorID % customColors.length;

  return (
    <Modal onHide={function noRefCheck() {}} onShow={function noRefCheck() {}}>
      <ModalTrigger>
        <Button
          leftContent={<Icon source={ChannelBtnSmileFilledIcon} size={IconSize.Normal} />}
          text={keyword}
          style={{ ...buttonStyle, backgroundColor: customColors[colorID] }}
          styleVariant={ButtonStyleVariant.FloatingAlt}
        />
      </ModalTrigger>
      <KeywordPopup
        colorID={colorID}
        keyword={keyword}
        description={description}
        outLink={`https://www.google.com/search?q=${keyword}`}
      />
    </Modal>
  );
};

export default KeywordBox;
