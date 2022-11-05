import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (properties) => {

    const removePost = (e) => {
        e.preventDefault();
        properties.remove(properties.post);
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{properties.post.id}. {properties.post.tittle}</strong>
                <div>
                    {properties.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <MyButton onClick={removePost}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;