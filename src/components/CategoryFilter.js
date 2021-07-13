import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  render() {
    const { categoryList } = this.props;
    return (
      <div className="category-filter">
        {categoryList.map((item) => (
          <li key={ item.id } data-testid="category">
            { item.name }
          </li>
        ))}
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryFilter;
