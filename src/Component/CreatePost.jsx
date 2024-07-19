import React from "react";
import {useRef} from 'react';
import { useContext } from "react";
import { PostlistItems } from "../store/Post-List-store";

const CreatePost = () => {

  const{addItem}=useContext(PostlistItems)

  const userIdElement=useRef();
  const userTitleElement=useRef();
  const userbodyElement=useRef();
  const userRectionElement=useRef();
  const userhastagsElement=useRef();
  
const handleForm=(event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
  const userTitle=userTitleElement.current.value;
  let userBody=userbodyElement.current.value;
  const userRection=userRectionElement.current.value;
  const userhastags=userhastagsElement.current.value.split(" ");
  userIdElement.current.value=" ";
  userTitleElement.current.value=" ";
  userbodyElement.current.value=" ";
  userRectionElement.current.value=" ";
  userhastagsElement.current.value=" ";



  addItem(userId,userTitle,userBody,userRection,userhastags)
}

  return (
    <div>
      <form className="create-post" onSubmit={handleForm}>
        <div class="mb-3">
          <label for="userId" class="form-label">
          Enter your User Id here
          </label>
          <input
            type="text"
            class="form-control"
            id="useId"
            ref={userIdElement}
            placeholder="Your User Id"
          />
       
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
           Post Title
          </label>
          <input
            type="text"
            class="form-control"
            ref={userTitleElement}
            placeholder="How are you feeling today..."
            id="title"
          />
        </div>

        <div class="mb-3">
          <label for="body" class="form-label">
           Post Content
          </label>
          <textarea
            type="text"
            class="form-control"
            rows="4"
            ref={userbodyElement}
            placeholder="Tell us more about it"
            id="body"
          />
        </div>

        <div class="mb-3">
          <label for="reactions" class="form-label">
            Number of reactions
          </label>
          <input
            type="text"
            class="form-control"
            ref={userRectionElement}
            placeholder="How many people reacted to this post"
            id="reactions"
          />
        </div>

        <div class="mb-3">
          <label for="tags" class="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            class="form-control"
            ref={userhastagsElement}
            placeholder="Please enter tags using space"
            id="tags"
          />
        </div>
        <button type="submit" class="btn btn-primary">
        Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
