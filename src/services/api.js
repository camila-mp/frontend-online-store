const urlCategories = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  return fetch(urlCategories)
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlCategoryAndQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}}`;
  return fetch(urlCategoryAndQuery)
    .then((data) => data.json());
}
