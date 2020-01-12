import React from "react";
import * as PropTypes from "prop-types";

const TypingHistory = ({ historyList }) => (
  <>
    <p>{historyList.map(rec => `${rec}, `)}</p>
    <br />
    <ul>
      {historyList.map((rec, index) => {
        return <li key={index}>{rec}</li>;
      })}
    </ul>
  </>
);

TypingHistory.propTypes = {
  historyList: PropTypes.array
};

export default TypingHistory;
