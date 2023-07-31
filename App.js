
import React from "react";
import  ReactDOM  from "react-dom/client";

// const jsxHeading = (<h1 id="heading" >
//     Hello world from JSX</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const HeadingComponent = ()=>{
   return <h1 id="heading">Hello World from Functional Component</h1>;
};

const HeadingComponent2 = () => <h1>Hello World from Functional Component 2</h1>;

root.render(<>
<HeadingComponent/><HeadingComponent2/></>);