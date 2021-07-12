const URL_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  return fetch(URL_CATEGORIES)
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL_CATEGORY_AND_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}}`;
  return fetch(URL_CATEGORY_AND_QUERY)
    .then((data) => data.json());
}
