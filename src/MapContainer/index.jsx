import styled from "styled-components";

const MapContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  border: 2px dotted black;
`;

export default MapContainer;
