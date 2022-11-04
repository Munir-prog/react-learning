import React, {useRef, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/style.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [languages, setLanguages] = useState([
        {id: 1, tittle: 'Java', body: "OOP language"},
        {id: 2, tittle: 'Python', body: "Func language"},
        {id: 3, tittle: 'Bash', body: "Script language"}
    ])
    //
    // const [cars, setCars] = useState([
    //     {id: 1, tittle: 'Mercedes', body: "Description"},
    //     {id: 2, tittle: 'BMW', body: "Description"},
    //     {id: 3, tittle: 'Audi', body: "Description"}
    // ])

    const createPost = (newPost) => {
        setLanguages([...languages, newPost])
    }

    const removePost = (post) => {
        setLanguages(languages.filter(lang => lang.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {languages.length !== 0
                ? <PostList posts={languages} remove={removePost} tittle="Some tittle for Languages" />
                : <h1 style={{textAlign: 'center'}}>Список пустой!</h1>
            }
            {/*<PostList posts={cars} remove={removePost} tittle="Some tittle for Cars" />*/}
        </div>
    );
}

export default App;
