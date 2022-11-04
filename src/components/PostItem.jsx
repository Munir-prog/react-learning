import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (properties) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{properties.number}. {properties.post.tittle}</strong>
                <div>
                    {properties.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;