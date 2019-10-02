import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  bottom: ${({bottom}) => bottom};
`;

export default function index({content, bottom}) {
  return <Container {...{bottom}}>{content}</Container>;
}
