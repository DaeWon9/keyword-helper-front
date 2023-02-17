import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalTrigger,
  Button,
  ButtonStyleVariant,
  Icon,
  ChannelBtnSmileFilledIcon,
  IconSize,
} from "@channel.io/bezier-react";
import { searchKeyword } from "../../api/Search.jsx";
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

const KeywordBox = ({ colorID, keyword, chats, buttonStyle = {} }) => {
  colorID = colorID % customColors.length;
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    searchKeyword(keyword).then((res) => {
      setSearchResult(res.items[0]);
    });
  }, []);

  return (
    <Modal onHide={function noRefCheck() {}} onShow={function noRefCheck() {}}>
      <ModalTrigger>
        <Button
          size="XL"
          leftContent={<Icon source={ChannelBtnSmileFilledIcon} size={IconSize.Normal} />}
          text={keyword}
          style={{ ...buttonStyle, backgroundColor: customColors[colorID] }}
          styleVariant={ButtonStyleVariant.FloatingAlt}
        />
      </ModalTrigger>
      <KeywordPopup
        colorID={colorID}
        keyword={keyword}
        searchResult={searchResult}
        outLink={`https://www.google.com/search?q=${keyword}`}
        chats={chats}
      />
    </Modal>
  );
};

export default KeywordBox;
