import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./style.css";

function Appy() {
  /*
      Cannot return more than one element from this return.
      If not error: JSX expressions must have one parent element
      Hence wrap all the elements into one element (ex. div)
      */
  return (
    <div>
    {/*
    style properties are camelCase insted of text-align
            */}
      <h1 style={{ textAlign: "center" }}>Hello World !!</h1>
      {/*
        <button class="button">Yo!</button>
      * 'class' is a reserved keyword here, we need to be using className
      * If not warning in console: Invalid DOM property `class`. Did you mean `className`? at button
      * And also comments need to be put inside curly braces in jsx (●'◡'●)
            */}
      <button className="button">Yo!</button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Appy />);

/*
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
*/
// ReactDOM.render(<Appy/>, document.getElementById('root'));
