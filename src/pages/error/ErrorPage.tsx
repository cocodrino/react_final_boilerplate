import React from 'react';
import { ReactComponent as Image } from './503error.svg';
import styled from "styled-components";

const SErrorPage = styled.div`
  width: 100%;
  margin: auto;
  & svg {
    margin: auto;
  }
`

export default () => (
    <SErrorPage>
        <Image />
    </SErrorPage>
);

