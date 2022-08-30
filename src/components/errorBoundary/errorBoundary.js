import React from "react";
import { resolvePath } from "react-router-dom";


export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {error: ""};
    }
  
    componentDidCatch(error) {
      this.setState({error: `${error.name}: ${error.message}`});
    }

//     async function f(){
//         let promise= new Promise((resove,reject)=>{
//             setTimeout(()=> resolvePath('done!!'),1000)
//         })
//         let result=await promise;
//         alert(result)
//     }
  
//   f();



    render() {
      const {error} = this.state;
      if (error) {
        return (
          <div>{error}</div>
        );
      } else {
        return <>{this.props.children}</>;
      }
    }
  };
  