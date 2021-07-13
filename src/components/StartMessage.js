import React from 'react';

class StartMessage extends React.Component {
  render() {
    return (
      <div className="main-container">
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <i className="bi bi-search main-container-icon" />
      </div>
    );
  }
}

export default StartMessage;
