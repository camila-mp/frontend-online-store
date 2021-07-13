import React from 'react';
import * as api from '../services/api';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.getCategoryList = this.getCategoryList.bind(this);
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  async getCategoryList() {
    const list = await api.getCategories();
    this.setState({
      categoryList: list,
    });
  }

  render() {
    const { categoryList } = this.state;

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

export default CategoryFilter;
