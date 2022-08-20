import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Global Styles
import { GlobalStyles } from "./styles/GlobalStyles";

// Routes
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
