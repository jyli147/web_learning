import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/postList';
import PostForm from './components/PostForm';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
  ])
  
  const createPost = (newPost) =>{
setPosts([...posts, newPost]);
  }

  const removePost = (post)=>{
setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список постов 1'/>
 
    </div>
  );
}

export default App;