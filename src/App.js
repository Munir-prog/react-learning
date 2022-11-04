import React, {useState} from 'react'
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/style.css';
import PostItem from "./components/PostItem";

function App() {
    const [value, setValueFor] = useState('Inputed text')


    return (
        <div className="App">
            {/*<Counter/>*/}
            {/*<ClassCounter/>*/}
            {/*<h1>{value}</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={value}*/}
            {/*    onChange={event => setValueFor(event.target.value)}*/}
            {/*/>*/}
            <PostItem post={{
                id: 1,
                tittle: 'Java',
                body: "OOP language"
            }}/>
            <PostItem post={{
                id: 2,
                tittle: 'Python',
                body: "Func language"
            }}/>
            <PostItem post={{
                id: 3,
                tittle: 'Bash',
                body: "Script language"
            }}/>
        </div>
    );
}

export default App;
