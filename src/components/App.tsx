/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import '../styles/index.css';
import styled from '@emotion/styled';

const H1 = styled.h1`
  color: turquoise;
`;

class App extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen',
          },
        }}
      >
        <H1>Hello World!</H1>
      </div>
    );
  }
}

export default App;
