import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      {/* Composition : 2개 이상의 Rotue를 render해주는 방법. /tv/popular 에 접근할 때, /tv도 render된다. */}
      <Redirect from="*" to="/" />
      {/* 위에서부터 일치되는 url을 찾는데, 만약 아무것도 찾지 못했다면, "/"로 이동하게 만들고 싶음. */}
      {/* 근데, 결국 모든 url이 "/"로 이동하는 문제점이 발생. => Switch */}
      {/* switch : Switch 내에 있는 모든 Route는 위에서부터 가장 먼저 발견된 url만 render.  */}
    </Switch>
  </Router>
);
