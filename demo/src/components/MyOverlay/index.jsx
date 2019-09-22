import React from "react";
import styled from "styled-components";

const MyOverlay = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #429;
  color: white;
`;

export default function index({ message }) {
  return <MyOverlay>{message}</MyOverlay>;
}
