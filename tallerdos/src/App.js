import AppHeader from "./component/AppHeader";
import AppBody from "./component/AppBody";
import AppFooter from "./component/AppFooter";

function Container() {
    return(
        <section>
            <AppHeader></AppHeader>
            <AppBody></AppBody>
            <AppFooter></AppFooter>
        </section>
       
    );
}

export default Container;

/*
function App() {
  return (


   /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desde el header
        </p>
      </header>

      <content className="App-content">
        <p>
          Desde el content
        </p>
      </content>

      <footer className="App-footer">
        <p> Desde el footer</p>
      </footer>
      
    </div>
  );
}
*/
/*export default App;*/


