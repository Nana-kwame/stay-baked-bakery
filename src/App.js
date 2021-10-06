// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { Welcome, Login, Home } from "./pages";

class App extends Component {
  render() {
    return (
      // <div className='app_demo'>
      //   <Card>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //   </Card>
      // </div>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="" exact component={Welcome} />
      </Switch>
    );
  }
}

export default App;
