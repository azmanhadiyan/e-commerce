import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header";
import ListProducts from "../Product/Products";
import ProductCart from "../Product/ProductCart/ProductCart";
import DetailProduct from "../Product/DetailProduct";

import store from "../Store/index";
import { Provider } from "react-redux";

import Login from "../SignIn/Login";
import Register from "../SignIn/Register";

const Routes = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <ListProducts />
            </Route>
            <Route exact path="/cart">
              <ProductCart />
            </Route>

            <Route exact path="/product/detail/:id">
              <DetailProduct />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
export default Routes;
