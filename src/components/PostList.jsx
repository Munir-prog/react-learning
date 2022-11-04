import React from 'react';
import PostItem from "./PostItem";

const PostList = (properties) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {properties.tittle}
            </h1>
            {properties.posts.map(post =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;