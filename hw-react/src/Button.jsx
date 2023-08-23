import React from "react";

/* title: input value which will be passed when using the component else where.
If not passed the default value assigned here "Yo!" will be displayed.
If no default values assigned nothing will be displayed. */
const Button = ({ title = "Yo!" }) => (
  <div>
    {/*
    <button class="button">Yo!</button>
        * 'class' is a reserved keyword here, we need to be using className
        * If not warning in console: Invalid DOM property `class`. Did you mean `className`? at button
    * using the parameter value to be displed as the button name
    */}
    <button className="button">{title}</button>
  </div>
);

export default Button;
