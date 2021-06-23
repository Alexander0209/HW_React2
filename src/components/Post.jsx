import React from 'react'
import PropTypes from 'prop-types'

export const Post = ({posts}) => {
    return (
        <li >
            <h3> №{posts.id} {posts.title}</h3>
            <p>{posts.body}</p>
        </li>
    )
}

Post.propTypes = {
    posts: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    })
}