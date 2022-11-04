import React, {useRef, useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/style.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [languages, setLanguages] = useState([
        {id: 1, tittle: 'Java', body: "OOP language"},
        {id: 2, tittle: 'Python', body: "Func language"},
        {id: 3, tittle: 'Bash', body: "Script language"}
    ])

    const [cars, setCars] = useState([
        {id: 1, tittle: 'Mercedes', body: "Description"},
        {id: 2, tittle: 'BMW', body: "Description"},
        {id: 3, tittle: 'Audi', body: "Description"}
    ])

    const [tittle, setTittle] = useState('dwda')
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(tittle)
        console.log(bodyInputRef.current.value)
    }
    return (
        <div className="App">
            <form>
                <MyInput
                    value={tittle}
                    onChange={e => setTittle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
           <PostList posts={languages} tittle="Some tittle for Languages" />
           <PostList posts={cars} tittle="Some tittle for Cars" />
        </div>
    );
}

export default App;
