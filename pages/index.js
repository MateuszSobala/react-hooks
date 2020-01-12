import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const [modifCount, setModifCount] = useState(0);

  return (
    <>
      <input
        onChange={e => {
          const newValue = e.target.value;

          setInputText(newValue);
          if (newValue) {
            setHistoryList([...historyList, newValue]);
          }
          setModifCount(prevCount => prevCount + 1);
        }}
        placeholder="Enter some text"
      />
      <p>
        Modification count: {modifCount}, last value: {inputText}
      </p>
      <p>{historyList.map(rec => `${rec}, `)}</p>
      <br />
      <ul>
        {historyList.map((rec, index) => {
          return <li key={index}>{rec}</li>;
        })}
      </ul>
    </>
  );
};

export default InputElement;
