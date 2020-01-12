import React from "react";
import * as PropTypes from "prop-types";

const CharacterCard = ({ modifCount, inputText, isAlive, imageUrl }) => (
  <>
    <p>
      Modification count: {modifCount}, last value: {inputText}, is alive Rick
      and Morty character: {isAlive ? "yes" : "no"}
    </p>
    <img src={imageUrl} alt="" />
  </>
);

CharacterCard.propTypes = {
  modifCount: PropTypes.number.isRequired,
  inputText: PropTypes.string,
  isAlive: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string
};

export default CharacterCard;
