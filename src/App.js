import React, {useEffect, useState} from 'react'
import './styles/style.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import {useLanguages} from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./components/hooks/useFetching";

function App() {
    const [languages, setLanguages] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setLanguages(posts);
    })
    const sortedAndSearchedPosts = useLanguages(languages, filter.sort, filter.query);

    useEffect(() => {
        fetchPosts();
    }, [])

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
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {
                isPostLoading
                    ? <div style={{marginTop: '50px',display: 'flex', justifyContent: 'center'}}>
                        <Loader/>
                      </div>
                    : <PostList posts={sortedAndSearchedPosts} remove={removePost} tittle="Some tittle for Languages"/>
            }
            <MyButton style={{marginTop: '30px', marginRight: '10px'}} onClick={() => setModal(true)}>
                Add PL
            </MyButton>
            {/*<button onClick={fetchPosts}>Get</button>*/}
            <MyButton style={{marginTop: '30px'}} onClick={() => fetchPosts()}>
                GetPosts
            </MyButton>
        </div>
    );
}

export default App;
