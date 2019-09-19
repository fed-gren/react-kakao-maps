import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 2px dotted black;
`;

export default function index({ children }) {
  return <Container className="map-container">{children}</Container>;
}
