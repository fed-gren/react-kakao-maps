import styled from "styled-components";

const MapContainer = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  //TODO: must be removed border style
  border: 2px dotted black;
`;

export default MapContainer;
