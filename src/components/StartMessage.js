import React from 'react';

class StartMessage extends React.Component {
  render() {
    return (
      <p
        className="main-container"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default StartMessage;
