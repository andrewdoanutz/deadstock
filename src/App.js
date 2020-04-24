import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import NewsFeed from "./pages/newsFeed"
import Marketplace from "./pages/marketplace"
import Account from "./pages/account"
import MakeAccount from "./pages/makeAccount"
import Blog from "./pages/blog"
import Releases from "./pages/releases"
import NavBar from "./components/navbar"
import Construction from "./pages/construction"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar/>
          <div className="page">
            <Route exact path="/" component={NewsFeed} />
            <Route exact path="/marketplace" component={Marketplace} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/createAccount" component={MakeAccount} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/underConstruction" component={Construction} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
