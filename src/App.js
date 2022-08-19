import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Routes from "./routes/Routes";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
}

export default App;
