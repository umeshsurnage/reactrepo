import React, {useState} from 'react'
import FbPostData from './FbPostData';

function FbPostContent(props){

    let{id, profileImage, name,day,fbImg,allLikes,allLikesCount,comment,fbCommentUserImg,fbCommentUserName,commentDate,commentLike,commentReply} = props;

    const [like, setLike]=useState(allLikes);
    const [bold, setBold] = useState(true)
    function textBold(){
      setBold(!bold)
    }

  function updateLike(){
    setLike(allLikes+1)
  }
  
  return <>
  <div className='fbpost'>
    <div className="fb-wrapper">
      <div className='fb-header'>
        <img src={profileImage} alt=""/>
        <div className='fb-title'>
          <b>{name}</b>
          <h4>{day}</h4>
        </div>
        <div className='fb-right-pannel'>
          <a href="#"><i className="fa-solid fa-ellipsis"></i></a>
          <a href="#"><i className="fa-solid fa-x"></i></a>
        </div>
      </div>
      <div className='fb-img'>
        <img src={fbImg} alt=""/>
      </div>
      <div className='fb-status'>
          <div className="all-likes">
            <div>
            <i className="fa-solid fa-thumbs-up"></i><a href="#">{like}</a>
            </div>
            <span><a href="#">{allLikesCount} Comment</a></span>
          </div> 

      </div>
      <div className='fb-action'>
        <button onClick={updateLike}> <i className="fa-regular fa-thumbs-up"></i>Like</button>
        <button><i className="fa-regular fa-comment"></i>Comment</button>
      </div>
      <div className='fb-all-comment'> 
        <p><a href="#">View more comments</a></p>
        <div className='fb-coment-user'>
          <a href="#"><img src={fbCommentUserImg} alt=""/></a>
          <div className='title'><a href="#">{fbCommentUserName}</a><p>This is stunning, I bet it's a heavy piece.</p></div>
          
        </div>
        <div className='emoji'>
          <div>
            <a href=""> {commentDate}</a>
            <a href="#" style={{textDecoration:bold? 'none' :'underline', color:bold? 'black':'blue'}}  onClick={textBold}>Like</a>
            <a href="#">{commentReply}</a>
          </div>
          </div>
      </div>
      <div className='fb-write-comment'>
        <img src="/img.jpg" alt=""/>
        <textarea name="" id=""></textarea>
        
        <div className='fb-icons'>
          <a href="#" className='one'><i className="fa fa-camera"></i></a>
          <a href="#" className='two'><i className="fa-regular fa-face-smile"></i></a>
          <a href="#" className='three'><i className="fa-regular fa-message"></i></a>
          <a href="#" className='four'><i className="fas fa-sticky-note"></i></a> 
          
        </div>
      </div>
    </div>
  </div>
  </>
}

export default FbPostContent