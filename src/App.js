import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.css';
import NewsFeed from "./pages/newsFeed"
import Marketplace from "./pages/marketplace"
import Account from "./pages/account"
import MakeAccount from "./pages/makeAccount"
import Blog from "./pages/blog"
import Releases from "./pages/releases"
import Construction from "./pages/construction"
import Login from "./pages/login"
import LandingPage from "./pages/landing"
import Technology from "./pages/technology"
import Mobile from "./pages/mobile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="page">
            <Route exact path="/" component={Login} />
            <Route exact path="/newsfeed" component={NewsFeed} />
            <Route exact path="/marketplace" component={Marketplace} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/createAccount" component={MakeAccount} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/releases" component={Releases} />
            <Route exact path="/underConstruction" component={Construction} />
            
          </div>
          <Route exact path="/aboutUs" component={LandingPage} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/app" component={Mobile} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
