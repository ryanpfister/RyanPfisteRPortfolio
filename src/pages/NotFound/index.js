import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const NotFound = () => {
  return (
    <div>
    <h1>Oops! You seem to be lost.</h1>
    <p>Here are some helpful links:</p>
    <Link to='/'>Home</Link>
</div>
  );
};