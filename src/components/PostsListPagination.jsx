import React from 'react'
import '../css/PostList.css'
import { getPosts } from '../api/posts'
import { Pagination } from './Pagination'

export const PostsListPagination = () => {

    const [posts, setPosts] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);

    const onClickShowMoreHandler = (pageNum) => {
        setLoading(true);
        getPosts(pageNum).then(posts => {
            setPosts(posts);
            setCurrentPage(pageNum);
            setLoading(false);
        });
    }

    React.useEffect(() => {
        onClickShowMoreHandler()
    }, [])

    const pagesNumber = 10;

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
            <Pagination pagesNumber={pagesNumber} paginate={onClickShowMoreHandler} currentPage={currentPage}/>
        </div>
    )
}