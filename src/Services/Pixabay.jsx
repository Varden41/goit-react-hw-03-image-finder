async function pixabayFetch(searchValue, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '29198064-00b99288cfca6b99747869826',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${page}`,
    per_page: 12,
  });
  const searchResponse = await fetch(`${BASE_URL}/?${searchParams}`);
  return searchResponse.json();
}

export default pixabayFetch;
