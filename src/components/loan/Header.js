import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title,onAdd, showAddForm}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} text={showAddForm?"Close":"New loan"} color={showAddForm?"pink":"pnik"} />
    </header>
  );
};


Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
