import {createContext} from 'react'
import {useReducer} from 'react'

export const PostlistItems=createContext({PostList:[],
  addItem:()=>{},
  deletePost:()=>{}
})


const PostItemReducer=(currentState,action)=>{
  let newPost=currentState
  if(action.type=="ADD_POST"){
    newPost=[
      action.payload, ...currentState
    ]
  }

  else if(action.type=="DELETE_POST"){
    newPost=currentState.filter((post)=>(
      post.id !== action.payload.postId
    ))
  }
  else if(action.type=="INITIAL_POST"){
    newPost=action.payload.posts;
  }
  return newPost
 }

const PostlistItemsProvider=({children})=>{
  const [postList,DispatchPostList]=useReducer(PostItemReducer, DEFAULT_POST_LIST)

  const addItem=(userId,userTitle,userBody,userRection,userhastags)=>{
    DispatchPostList({
      type:"ADD_POST",
      payload:{
        id:Date.now(),
        userId:userId,
        userTitle:userTitle,
        userBody:userBody,
        userRection:userRection,
        userhastags:userhastags
      }
    })


  }

  const deletePost=(postId)=>{
    DispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId,
      }
    })
  }

  const addInitialPost=(posts)=>{
   DispatchPostList({
    type:'INITIAL_POST',
    paylod:{
      posts
    }
   })
  }
  return(
      <PostlistItems.Provider value={{postList,addItem,deletePost}}>
          {children}
      </PostlistItems.Provider>
  )
}


const DEFAULT_POST_LIST=[
  {
        id: "1",
        userTitle: "Going to Mumbai",
        userBody: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
        userRection: 2,
        userId: "user-9",
        userhastags: ["vacation", "Mumbai", "Enjoying"],
      },
      {
        id: "2",
        userTitle: "Paas ho bhai",
        userBody: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
        userRection: 15,
        userId: "user-12",
        userhastags: ["Graduating", "Unbelievable"],
      },
]


export default PostlistItemsProvider


