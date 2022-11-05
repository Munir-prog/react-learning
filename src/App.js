import React, {useMemo, useRef, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/style.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
    const [languages, setLanguages] = useState([
        {id: 1, tittle: 'Java', body: "OOP language"},
        {id: 2, tittle: 'Python', body: "Func language"},
        {id: 3, tittle: 'Bash', body: "Script language"}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedLanguages = useMemo(() => {
        if (filter.sort) {
            return [...languages].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return languages
        }
    }, [filter.sort, languages])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedLanguages.filter(language => language.tittle.toLowerCase().includes(filter.query.toLowerCase()) || language.body.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedLanguages])

    const createPost = (newPost) => {
        setLanguages([...languages, newPost])
    }

    const removePost = (post) => {
        setLanguages(languages.filter(lang => lang.id !== post.id));
    };


    return (
        <div className="App">
            <MyModal>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} remove={removePost} tittle="Some tittle for Languages" />
        </div>
    );
}

export default App;
