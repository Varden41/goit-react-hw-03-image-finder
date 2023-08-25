let PAGE_COUNTER = 1;

async function pixabayFetch(searchValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '29198064-00b99288cfca6b99747869826',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${PAGE_COUNTER}`,
    per_page: 12,
  });
  const searchResponse = await fetch(`${BASE_URL}/?${searchParams}`);

  if (searchResponse.ok) {
    return searchResponse.json();
  }
  return Promise.reject(new Error(`ERROR`));
}

export default pixabayFetch;

export const resetPage = () => {
  PAGE_COUNTER = 1;
};
