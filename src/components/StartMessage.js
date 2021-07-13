import React from 'react';

class StartMessage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <p
          className="main-message"
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <i className="bi bi-search magnifier" />
      </div>
    );
  }
}

export default StartMessage;
