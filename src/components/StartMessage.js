import React from 'react';

class StartMessage extends React.Component {
  render() {
    return (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default StartMessage;
