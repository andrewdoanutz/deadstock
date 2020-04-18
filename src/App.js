import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import './App.css';
import NewsFeed from "./pages/newsFeed"
import Marketplace from "./pages/marketplace"
import Account from "./pages/account"
import Blog from "./pages/blog"
import Calendar from "./pages/calendar"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NewsFeed} />
          <Route exact path="/marketplace" component={Marketplace} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
