import ReactPlayer from 'react-player'

import ironhackLogo from './assets/ironhack-logo.png';
import './App.css';

import Header from "./components/Header";
import Footer from './components/Footer';
import User from "./components/User";


function App() {

  const theId = "main-container";
  const title = "Hello Loopey Tunes";
  const amount = 10;

  const user = {
    firstName: "bob",
    surname: "smith"
  };

  const myStyle = {
    color: "fuchsia",
    fontSize: "150%"
  }

  function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  return (
    <div id={theId} className="App">

      <Header title="Hello World" />


      <img src={ironhackLogo} alt="ironhack logo" />

      <h1>{title}</h1>
      <h2>Number of movies: {amount * 2} </h2>


      {/* This is a comment  */}

      <p style={myStyle}>
        Hello {user.firstName.toUpperCase()}, {user.surname}
      </p>


      <p>
        Hello {capitalizeFirstLetter(user.firstName)},  {capitalizeFirstLetter(user.surname)}
      </p>


      <hr />

      <User userName="Alice" age={30} favFood="pizza" />
      <User userName="Bob" age={40} favFood="pizza" />
      <User userName="Charly" age={50} favFood="pizza" />

      <hr />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing={true} />

      <Footer>
        <p>Copyleft LoopeyTunes 2023</p>
      </Footer>

    </div>
  );
}

export default App;
