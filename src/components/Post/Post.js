import React from 'react';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

  

const Post = (props) => {
   const {authorname, title, date, img, usericon, readtime, tag}=props.post;
   const addToBookmark =props.addToBookmark;

    return (
        <div>
            
            
            <div className="post">
            <img className='postimg' src={img} alt="" />
            <div className="authordetails">
                <div className="authorinfo">
                    <img src={usericon} alt="" />
                    <div className="authornamePostDate">
                        <div className="authorname">{authorname}</div>
                        <div className="postdate">{date}</div>
                    </div>
                </div>
                <div className="postinfo">
                    <p className="readtime">{readtime} min read</p>
                    <p onClick={()=>addToBookmark(props.post)} className='bokmaricon'><FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <h3 className='posttitle'>{title}</h3>
            <p className='posttag'>{tag}</p>
            </div>
            <p className='markread'>Mark as read</p>
            <hr className='posthr'></hr>
            
        </div>
    );
};

export default Post;