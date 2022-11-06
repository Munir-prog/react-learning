import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../api/PostService";
import PostMapper from "../utils/PostMapper";
import Loader from "../components/UI/loader/Loader";

const About = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(PostMapper.mapServerPost(response.data));
    })

    const [fetchCommentsPostById, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsPostById(params.id);
    }, [])


    return (
        <div>
            <h1>Welcome to post page with ID = {params.id}!</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>
                        <h3>{post.tittle}</h3>
                        <p>{post.body}</p>
                        <p>{post.body}</p>
                        <p>{post.body}</p>
                    </div>
            }
            <br/>
            <br/>
            <br/>
            <h3>Comments:</h3>
            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {
                            comments.map(comment =>
                                <div key={comment.id} style={{marginTop: 15}}>
                                    <h5>{comment.email}</h5>
                                    <div>{comment.body}</div>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default About;