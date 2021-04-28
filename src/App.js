import React from "react";
import { HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./component/Navigation.js";

function App() {
    return <HashRouter>
        <Navigation />
        <Route path="/about" component={About} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/movie/:id" component={Detail} />
    </HashRouter>
}

export default App;