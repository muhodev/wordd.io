import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppLayout } from "components";
import { Home, New } from "views";

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/new">
            <New />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
