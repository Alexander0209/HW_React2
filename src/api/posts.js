export const getPosts = (nextPage, postsPerPage) => fetch(`https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=${postsPerPage}`).then(response => {   
    return {
        count: response.headers.get('x-total-count'),
        posts: response.json(),
    }
})

export const getMorePosts = (nextPage) => fetch(`https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=10`).then(posts => posts.json())