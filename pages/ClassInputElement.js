import React, { Component } from "react";
import CharacterCard from "../src/CharacterCard";
import TypingHistory from "../src/TypingHistory";
import InputWithHistory from "../src/InputWithHistory";
import axios from "axios";

class ClassInputElement extends Component {
  state = {
    inputText: "",
    historyList: [],
    modifCount: 0,
    isAlive: false,
    imageUrl: ""
  };

  isCharacterAlive() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${this.state.inputText}`
      )
      .then(response => {
        const result = response.data.results[0];
        console.log(result);
        if (result.name === this.state.inputText) {
          this.setState({
            imageUrl: result.image, // Alien Rick
            isAlive: result.status === "Alive" // Rick Sanchez
          });
        } else {
          this.setState({ isAlive: false, imageUrl: "" });
        }
      })
      .catch(() => this.setState({ isAlive: false, imageUrl: "" }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputText !== this.state.inputText) {
      clearInterval(this.charUpdater);
      this.charUpdater = setInterval(() => this.isCharacterAlive(), 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.charUpdater);
  }

  render() {
    return (
      <>
        <InputWithHistory
          setInputText={newValue => this.setState({ inputText: newValue })}
          addToHistory={newValue =>
            this.setState(prevState => {
              const newHistory = [...prevState.historyList, newValue];
              return { historyList: newHistory };
            })
          }
          incModifCount={() =>
            this.setState({ modifCount: this.state.modifCount + 1 })
          }
          placeholder="Enter character name"
        />
        <CharacterCard
          modifCount={this.state.modifCount}
          inputText={this.state.inputText}
          isAlive={this.state.isAlive}
          imageUrl={this.state.imageUrl}
        />
        <TypingHistory historyList={this.state.historyList} />
      </>
    );
  }
}

export default ClassInputElement;
