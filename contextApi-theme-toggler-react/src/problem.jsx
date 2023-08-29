import React, { useState } from "react";

/**
 * Props are used to transfer information from one component to another
 * State is a single place where everything is stored and the update goes through the state
 * Now,
 * Context provides a way to pass data throught the component tree without having to pass props down manually at every level.
 * 
 * Remember these 3 words for now:
 * createContext
 * Provider, when every provider is involved remember there is also a value 
 * Consumer
 * 
 * Just to understand the probelm and why contextapi is introduced, below is a example of the problem
 * (all components written is single file for simplicity)
 */

const GrandChild = (props) => {
    /*
    GrandChild component is NOT using the props passed from the Problem,
    Since the Child component is using the brnadName and this is being rendered inside the GrandChild
    we had to pass down the props from 1st to the last component (also known as props drilling)
    */
    return (
        <div>
            <h3>Grand Child: yo!</h3>
            <Child brand={props.brandN} />
        </div>
    )
}

const Child = (props) => {
    /*
    Suppose this component has another component and that has another and this props is being passed down,
    we might have to pass it infinite times and also it increases complexity. Hence to avoid this,
    we have a store at a separate place. When ever any component need any data it can directly access from that store without
    being dependent on the props being passed down from the parent component.
    Hence ContextApi solves this problem.
    */
    return (
        <div>
            <h2>Child: {props.brand}</h2>
        </div>
    )
}

const Problem = () => {
    const [brandName] = useState('Google');
    
    return (
        <div>
            <h1>Parent: Hi!</h1>
            <GrandChild brandN={brandName} />
        </div>
    )
}

export default Problem;