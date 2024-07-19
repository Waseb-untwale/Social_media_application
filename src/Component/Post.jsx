import React, { useContext } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { PostlistItems } from '../store/Post-List-store'
const Post = ({post}) => {

  const{deletePost}=useContext(PostlistItems)

  return (
    
 
      <div class="card post-card" style={{width:"30rem"}}>
      <div class="card-body">
      <h5 class="card-title">{post.userTitle}
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)} >
      <AiFillDelete/>
      </span>
      </h5>
      <p class="card-text">{post.userBody}</p>

      {post.userhastags ?.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">
            {tag}
          </span>
        ))}
<div class="alert alert-info " role="alert">
  This post has been reacted by {post. userRection} people
</div>
      
      
  </div>
</div>

  )
}

export default Post
