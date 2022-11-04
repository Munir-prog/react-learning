import React from 'react';
import PostItem from "./PostItem";

const PostList = (properties) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {properties.tittle}
            </h1>
            {properties.posts.map((post, index) =>
                <PostItem post={post} number={index + 1} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;