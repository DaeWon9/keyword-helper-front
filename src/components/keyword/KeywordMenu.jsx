import { getKeywordByID, getKeywordByTime, getChatByKeyword } from "../../api/Keyword.jsx";
import KeywordBox from "./KeywordBox";
import { Icon, IconSize, LightbulbIcon } from "@channel.io/bezier-react";
import "./KeywordMenu.css";
import { useEffect, useState } from "react";

const KeywordMenu = () => {
  const [keywords, setKeywords] = useState(null);
  const [chatByKeywords, setChatByKeywords] = useState([]);

  const initKeywords = async () => {
    setKeywords(await getKeywordByID("asd"));
  };
  const initChatByKeywords = async () => {
    setChatByKeywords(await Promise.all(keywords.map((keyword) => getChatByKeyword(keyword))));
  };

  useEffect(() => {
    initKeywords();
  }, []);
  useEffect(() => {
    if (keywords) initChatByKeywords();
  }, [keywords]);

  return (
    <div className="keyword-menu">
      <div className="keyword-menu-header">
        <Icon source={LightbulbIcon} size={IconSize.L} marginRight={3} marginLeft={10} />
        <h1>Keywords</h1>
      </div>
      <div className="keyword-menu-content">
        {keywords == null ? (
          <p>Loading keywords...</p>
        ) : (
          keywords.map((word, id) => (
            <KeywordBox
              key={id}
              colorID={id}
              keyword={word}
              description={`${id}번째 키워드는 ${word}입니다.`}
              chats={chatByKeywords[id]}
              buttonStyle={{ display: "block", margin: "10px 20px" }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default KeywordMenu;
