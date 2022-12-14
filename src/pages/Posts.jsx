import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useLanguages} from "../components/hooks/usePosts";
import PostService from "../api/PostService";
import {useFetching} from "../components/hooks/useFetching";
import {getPageCount} from "../utils/page";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";
import MyButton from "../components/UI/button/MyButton";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostMapper from "../utils/PostMapper";
import {useObserver} from "../components/hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [languages, setLanguages] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = useLanguages(languages, filter.sort, filter.query);
    const lastElement = useRef();


    // let pagesArray = getPagesArray(totalPages);

    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setLanguages([...languages,
            ...response.data.map(post => PostMapper.mapServerPost(post))]
        )
        let totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    const createPost = (newPost) => {
        setLanguages([...languages, newPost]);
        setModal(false);
    }

    const removePost = (post) => {

        setLanguages(languages.filter(lang => lang.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App">
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue={"Element quantity on page"}
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'show all'}
                ]}
            />
            <MyButton style={{marginTop: '30px', marginRight: '10px'}} onClick={() => setModal(true)}>
                Add PL
            </MyButton>
            {/*<button onClick={fetchPosts}>Get</button>*/}
            <MyButton style={{marginTop: '30px'}} onClick={() => fetchPosts()}>
                GetPosts
            </MyButton>
            {postError && <h1>?????????????????? ???????????? ${postError}</h1>}
            <PostList posts={sortedAndSearchedPosts} remove={removePost} tittle="Some tittle for Languages"/>
            <div ref={lastElement} style={{height: 20}}/>
            {
                isPostLoading &&
                <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
                   <Loader/>
                </div>
            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
