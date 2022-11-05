import React from 'react';
import PostItem from "./PostItem";

const PostList = (properties) => {

    if (!properties.posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Список пустой!</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {properties.tittle}
            </h1>
            {properties.posts.map((post, index) =>
                <PostItem remove={properties.remove} post={post} number={index + 1} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;