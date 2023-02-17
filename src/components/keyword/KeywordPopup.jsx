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
import "./KeywordPopup.css";
import customColors from "../CustomColors";

const KeywordPopup = ({ colorID, keyword, description, outLink }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ModalContent>
      <ModalBody>
        <div className="modal-container">
          <div className="modal-left">
            <div className="modal-keyword-box" style={{ backgroundColor: customColors[colorID] }}>
              <h1 className="modal-keyword-title">{keyword}</h1>
              <Tooltip
                content={description}
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
              <p>Hello World1!</p>
              <p>Hello World2!</p>
              <p>Hello World3!</p>
              <p>Hello World1!</p>
              <p>Hello World2!</p>
              <p>Hello World3!</p>
              <p>Hello World1!</p>
              <p>Hello World2!</p>
              <p>Hello World3!</p>
              <p>Hello World1!</p>
              <p>Hello World2!</p>
              <p>Hello World3!</p>
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
