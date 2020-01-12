import React, { useState } from "react";
import useDidMountEffect from "../src/useDidMountEffect";
import CharacterCard from "../src/CharacterCard";
import TypingHistory from "../src/TypingHistory";
import InputWithHistory from "../src/InputWithHistory";
import axios from "axios";

const isCharacterAlive = (charName, setImageUrl, setIsAlive) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/?name=${charName}`)
    .then(response => {
      const result = response.data.results[0];
      console.log(result);
      if (result.name === charName) {
        setImageUrl(result.image); // Alien Rick
        setIsAlive(result.status === "Alive"); // Rick Sanchez
      } else {
        setIsAlive(false);
        setImageUrl("");
      }
    })
    .catch(() => {
      setIsAlive(false);
      setImageUrl("");
    });
};

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const [modifCount, setModifCount] = useState(0);
  const [isAlive, setIsAlive] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useDidMountEffect(() => {
    const charUpdater = setInterval(
      () => isCharacterAlive(inputText, setImageUrl, setIsAlive),
      5000
    );
    return () => clearInterval(charUpdater);
  }, [inputText]);

  return (
    <>
      <InputWithHistory
        setInputText={setInputText}
        addToHistory={newValue =>
          setHistoryList(prevState => [...prevState, newValue])
        }
        incModifCount={() => setModifCount(prevCount => prevCount + 1)}
        placeholder="Enter character name"
      />
      <CharacterCard
        modifCount={modifCount}
        inputText={inputText}
        isAlive={isAlive}
        imageUrl={imageUrl}
      />
      <TypingHistory historyList={historyList} />
    </>
  );
};

export default InputElement;
