import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({tittle: '', body: ''})


    // const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({tittle: '', body: ''});
        // e.preventDefault();
        // console.log(tittle)
        // console.log(bodyInputRef.current.value)
    }

    return (
        <form>
            <MyInput
                value={post.tittle}
                onChange={e => setPost({...post, tittle: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;