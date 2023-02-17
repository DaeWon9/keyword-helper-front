import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  ModalClose,
  Button,
  ButtonStyleVariant,
  Tooltip,
} from "@channel.io/bezier-react";
import ChatBox from "../chat/ChatBox";
import "./KeywordPopup.css";
import customColors from "../CustomColors";
import { useState, useRef, useEffect } from "react";

const KeywordPopup = ({ colorID, keyword, searchResult, outLink, chats }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [imgShow, setImgShow] = useState(false);
  const keywordBoxRef = useRef();

  return (
    <ModalContent>
      <ModalBody>
        <div className="modal-container">
          <div className="modal-left">
            {imgShow && searchResult && searchResult.thumbnail !== "" ? (
              <div
                style={{
                  position: "absolute",
                  left: keywordBoxRef.current.offsetLeft - 100,
                  top: keywordBoxRef.current.offsetTop,
                }}
              >
                <img
                  src={searchResult ? searchResult.thumbnail : ""}
                  width={100}
                  height={100}
                ></img>
              </div>
            ) : (
              <></>
            )}
            <div
              className="modal-keyword-box"
              ref={keywordBoxRef}
              style={{ backgroundColor: customColors[colorID] }}
            >
              <h1
                className="modal-keyword-title"
                onMouseEnter={() => setImgShow(true)}
                onMouseLeave={() => setImgShow(false)}
              >
                {keyword}
              </h1>
              <Tooltip
                content={
                  searchResult
                    ? String(searchResult.description).replaceAll("<b>", "").replaceAll("</b>", "")
                    : ""
                }
                delayHide={0}
                delayShow={0}
                lazy
                offset={4}
                placement="bottomCenter"
              >
                <Button
                  text="사전 정의"
                  size="S"
                  leftContent="book"
                  styleVariant={ButtonStyleVariant.Tertiary}
                />
              </Tooltip>
              <Button
                leftContent="open-in-new"
                text="See more"
                size="S"
                rightContent="arrow-right"
                styleVariant={ButtonStyleVariant.Tertiary}
                onClick={(e) => {
                  openInNewTab(outLink);
                }}
              />
            </div>
          </div>
          <div className="modal-right">
            <div className="modal-chat">
              {!Array.isArray(chats) ? (
                <span>Loading previous chat...</span>
              ) : (
                <ChatBox
                  chatData={chats.map(({ chat, nickname }) => {
                    const newChat = {
                      chatId: chat.id,
                      name: nickname,
                      chatContent: chat.chat,
                      time: chat.created_at,
                    };
                    return newChat;
                  })}
                />
              )}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter
        rightContent={
          <ButtonGroup>
            <ModalClose>
              <Button colorVariant="monochromeLight" styleVariant="secondary" text="Close" />
            </ModalClose>
          </ButtonGroup>
        }
      />
    </ModalContent>
  );
};

export default KeywordPopup;
