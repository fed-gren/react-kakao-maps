import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";
import MapView from "./MapView";

const MyStartApp = styled.div`
  width: 50%;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default hot(() => {
  return (
    <MyStartApp>
      <h1>react-kakao-maps demo</h1>
      <MapView />
    </MyStartApp>
  );
});
