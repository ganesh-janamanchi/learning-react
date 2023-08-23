// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import Appy from "./App";

createRoot(document.getElementById("root")).render(<Appy />);

/*
Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead.
Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

ReactDOM.render(<Appy/>, document.getElementById('root'));
*/
