import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { name, id } }) {
    const { getState } = this.props;

    getState(name, id);
  }

  render() {
    const { categoryList } = this.props;
    return (
      <div>
        {categoryList.map((item) => (
          <Link
            to="/search"
            key={ item.id }
            data-testid="category"
            id={ item.id }
            name="category"
            onClick={ this.handleClick }
          >
            { item.name }
          </Link>
        ))}
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getState: PropTypes.func.isRequired,
};

export default CategoryFilter;
