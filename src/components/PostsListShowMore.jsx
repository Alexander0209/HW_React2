import React from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '../api/posts'
import '../css/PostList.css'

export const PostsListShowMore = () => {

    const [posts, setPosts] = React.useState([]);
    const [nextPage, setNextPage] = React.useState(1);
    const [isLoading, setLoading] = React.useState(false)

    const isDisabled = ((nextPage >= 11) ? true : false) || isLoading ;
    
    const onClickShowMoreHandler = () => {
        setLoading(true);
        const prevPage = [...posts];
        getPosts(nextPage).then(posts => {
            const lastPage = posts[posts.length-1].userId;
            setPosts([...prevPage, ...posts]);
            setNextPage(lastPage+1);
            setLoading(false);
        });
    }

    React.useEffect(() => {
        onClickShowMoreHandler()
    }, [])

    if(isLoading && !posts.length) {
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
            <button disabled={isDisabled} type="button" className="showMore" onClick={onClickShowMoreHandler}>Показать еще</button>
        </div>
    )
}

PostsListShowMore.propTypes = {

}
 