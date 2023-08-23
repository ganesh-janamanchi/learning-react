import React from "react";
import "./style.css";
import Button from "./Button";

const Appy = () => {
  /*
        Cannot return more than one element from this return.
        If not error: JSX expressions must have one parent element
        Hence wrap all the elements into one element (ex. div)

        * And also comments need to be put inside curly braces in jsx (●'◡'●)
        */
  return (
    <div>
      {/*
      style properties are camelCase insted of text-align
              */}
      <h1 style={{ textAlign: "center" }}>Hello World !!</h1>
      <Button title="Button 1 ☜(ﾟヮﾟ☜)" />
      <Button title="(☞ﾟヮﾟ)☞ Button 2" />
      <Button />
    </div>
  );
};

export default Appy;
