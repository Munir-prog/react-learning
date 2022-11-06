import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';
const PostItem = (properties) => {

    const router = useNavigate();

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
                <MyButton onClick={() => router('/post/' + properties.post.id)}>View</MyButton>
            </div>

        </div>
    );
};

export default PostItem;