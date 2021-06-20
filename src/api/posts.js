export const getPosts = (nextPage, postsPerPage) => fetch(`https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=${postsPerPage}`).then(response => {   
    return {
        count: response.headers.get('x-total-count'),
        posts: response.json(),
    }
})
