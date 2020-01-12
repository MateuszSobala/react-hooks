import React from "react";
import * as PropTypes from "prop-types";

const InputWithHistory = ({
  setInputText,
  addToHistory,
  incModifCount,
  placeholder = "Enter some text"
}) => (
  <input
    onChange={e => {
      const newValue = e.target.value;

      setInputText(newValue);
      if (newValue) {
        addToHistory(newValue);
      }
      incModifCount();
    }}
    placeholder={placeholder}
  />
);

InputWithHistory.propTypes = {
  setInputText: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
  incModifCount: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default InputWithHistory;
