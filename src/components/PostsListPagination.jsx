import React from 'react'
import '../css/PostList.css'
import { getPosts } from '../api/posts'
import { Pagination } from './Pagination'

export const PostsListPagination = () => {

    const [posts, setPosts] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pagesAmount, setPagesAmount] = React.useState(10)
   
    const postsPerPage = 10;

    const onClickPageHandler = (pageNum) => {
        setLoading(true);
        getPosts(pageNum, postsPerPage).then(posts => {
            posts.posts.then(json => setPosts(json))
            setCurrentPage(pageNum);
            setPagesAmount(posts.count/postsPerPage);
            setLoading(false);
        });
    }

    React.useEffect(() => {
       onClickPageHandler(1)
    }, [])


    if(isLoading) {
        return (
            <p className='loading'>Loading...</p>
        )
    }

    return ( 
        <div className="wrapper">
            <h2 className="title">Posts list</h2>
            <ul>
                {
                    posts.map(posts => {
                        return (
                            <li key={posts.id}>
                                <h3> №{posts.id} {posts.title}</h3>
                                <p>{posts.body}</p>
                            </li>
                        )                        
                    })
                }
            </ul>
            <Pagination pagesNumber={pagesAmount} paginate={onClickPageHandler} currentPage={currentPage}/>
        </div>
    )
}