import React, { useEffect, useState } from 'react';
import './Boady.css'
import Post from '../Post/Post';
import Bookmarkright from '../Bookmarkright/Bookmarkright';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Boady = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('posts.json')
        .then(res => res.json())
        .then (data => setPosts(data))
    },[])


    const [addbookmark, setAddbookmark] =useState([])
    

    const addToBookmark =(post)=>{  
        if (addbookmark.some((item) => item.id === post.id)) {  
            toast.warn(" Already Added This Item" ,{
                autoClose:2000,
                theme: 'dark'
            })
        } 
        else {
          let newarray = [...addbookmark, post]
          setAddbookmark(newarray)
          localStorage.setItem('posts', JSON.stringify(newarray.map(postid=>postid.id)))
         
        }
        
    }
    return (
        <div>
            <div className="all-boady-content">
                <div className="post">
                    {posts.map(post => <Post
                    key={post.id}
                    post={post}
                    addToBookmark={addToBookmark}
                    
                    ></Post>)}
                </div>
                <div className="bookmark-right">
                    <Bookmarkright addbookmark={addbookmark}></Bookmarkright>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Boady;