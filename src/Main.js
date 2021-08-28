import React, { useState, useEffect } from "react";
import './App.css';
import './gif.png'
import Sidebar from "./Sidebar";
export default function Home() {
//collect the post-list from localstorage and parse it with JSON.parse() method
const postsData = JSON.parse(localStorage.getItem("posts"));
//initilize our parsed data if there is no data inside our initial state will be set as empty array []
  const [posts, setPosts] = useState(postsData || []);
  const [author, setauthor] = useState("");
  const [message, setMessage] = useState("");
 

  const handleauthor = e => {
    setauthor(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };
  const AddPost = e => {
    e.preventDefault();
    setPosts([...posts, {
        author,
        message
      }
    ]);
    //let clear the input box after adding our post
    setauthor("");
    setMessage("");
  };
  const removePost = (message) => {
     //removePost take author as argument
    //let's reset the post list after filtering post author which are not equal to author
    setPosts(posts.filter(item => item.message !== message));
  };
 
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  });
 
  return (
    <div className="Section__one">
      <div className="container">
        <div className="row">
          <div className="local__storage">
            <h1>Write Poetry</h1>
            <span>This App Uses LocalStorage</span>
            <hr />

               

            <form onSubmit={AddPost}>

            

              <div className="form-container"  >
              
               
              </div>
              <div>
                <textarea placeholder="What's on your mind, There?" type="text" value={message} rows="5" onChange={handleMessage} required />
                <input type="text" value={author} onChange={handleauthor}  name="" placeholder="Author" required />
                <Sidebar/>
                
             
               
              </div>
            
              
             
             
              
              <button className="submitbutton" type="submit">Add Post</button>
             
            </form>
           

          </div>
        </div>
      </div>     

      {posts.map(item => ( 
              //remember to set the key , each item need to have a key
              <div className="posts" >
              <div className="post" key={item.message}>
                <h3>{item.message}</h3  >
                <p> Author| {item.author}</p>
                <span className="close__buttons">
                  <button onClick={() => removePost(item.message)}>Delete</button>
                </span>
              </div>
              </div>
            ))}

    </div>

    
  );
}

