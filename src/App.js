import React, {useMemo, useRef, useState} from 'react'
import './styles/style.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {useLanguages} from "./components/hooks/usePosts";

function App() {
    const [languages, setLanguages] = useState([
        {id: 1, tittle: 'Java', body: "OOP language"},
        {id: 2, tittle: 'Python', body: "Func language"},
        {id: 3, tittle: 'Bash', body: "Script language"}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = useLanguages(languages, filter.sort, filter.query);

    const createPost = (newPost) => {
        setLanguages([...languages, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setLanguages(languages.filter(lang => lang.id !== post.id));
    };


    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} remove={removePost} tittle="Some tittle for Languages" />

            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Add PL
            </MyButton>
        </div>
    );
}

export default App;
