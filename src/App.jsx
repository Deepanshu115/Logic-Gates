
import "./App.css";
// import './LogicGatesDemo.css';
// import Clock from "./Components/Clock";
// import LoginControl from "./Components/LoginControl";
// import Clock1 from "./Components/Clock1";
// import Counter from "./Components/Counter";
// import Apps from "./Components/Apps";
import LogicGatesDemo from "./Components/LogicGatesDemo";

function App() {


  return (
    <>
      {/* <Clock name="deep"></Clock> */}
      {/* <Counter name="deep"></Counter> */}
      {/* <ChatContainer name="deep"></ChatContainer> */}
      {/* <Apps name="deep"></Apps> */}
      <LogicGatesDemo name="group1"></LogicGatesDemo>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css'
// import CanvasJS from '@canvasjs/charts';

// function App() {
// useState(()=>{
// var chart = new CanvasJS.Chart("container", {
//   title:{
//     text: "Basic Column Chart in JavaScript"              
//   },
//   data: [{
//     type: "column",
//     dataPoints: [
//       { label: "apple",  y: 10  },
//       { label: "orange", y: 15  },
//       { label: "banana", y: 25  },
//       { label: "mango",  y: 30  },
//       { label: "grape",  y: 28  }
//     ],
//   },],
//   });
//   chart.render();
// }, []);

//   return (
//     <>
//       <div id="chartContainer"></div>
//     </>
//   )
// }

// export default App
