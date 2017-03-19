import React, { PropTypes } from "react";

const PollHeader = ({ name, author }) => {
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <h2 style={{ textAlign: "center" }}>by {author}</h2>
    </header>
  );
};

PollHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default PollHeader;
