import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import Postlist from './Component/Postlist';
import { useState } from "react";
import CreatePost from './Component/CreatePost'

import PostlistItemsProvider  from "./store/Post-List-store";
function App() {
  const[selected,setSelected]=useState("Home")
  return (
    <PostlistItemsProvider>
    <div className="app-container">
   <Sidebar selected={selected}
   setSelected={setSelected}></Sidebar>
   <div className="content">
   <Header></Header>
   {selected==="Home" ?<Postlist></Postlist>:<CreatePost></CreatePost>}
   <Footer></Footer>
   </div>
   </div>
 </PostlistItemsProvider >

  );
}

export default App;
