import React from 'react';

const PostItem = (properties) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{properties.post.id}. {properties.post.tittle}</strong>
                <div>
                    {properties.post.body}
                </div>
            </div>
            <div className="post__buttons">
                <button>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;