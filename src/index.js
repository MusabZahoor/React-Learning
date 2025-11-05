import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopProductsProvider } from "./shopAssignment/ShopProductsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ShopProductsProvider>

  <App />
</ShopProductsProvider>
);
