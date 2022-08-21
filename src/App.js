import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// global styles
import { GlobalStyles } from "./styles/GlobalStyles";

// routes
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
