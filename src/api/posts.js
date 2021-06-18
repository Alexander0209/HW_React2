export const getPosts = (nextPage) => fetch(`https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=${10}`).then(response => response.json())
