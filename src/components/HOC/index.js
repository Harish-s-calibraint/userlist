import React from "react";
import Content from "./content";
import Wrapper from "./wrapper";
 
function HOCApp() {
    const AppComponent = Wrapper(Content);
    return (
        <div>
            
            <h1><AppComponent/></h1>
        </div>
    );
}

export default HOCApp