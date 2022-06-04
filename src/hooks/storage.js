import { useEffect, useState } from 'react';
// import data from './db.json';

const STORAGE_KEY = 'itss_react_demo';

function useStorage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    setPosts(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  };

  // useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(data.posts)), []);

  useEffect(() => fetchPosts, []);

  const addPost = (post) => {
    const newPosts = [post, ...posts];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  const updatePost = (id, post) => {
    const newPosts = posts.map((p) => (p.id === id ? post : p));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
    setPosts(newPosts);
  };

  return { posts, addPost, updatePost, deletePost };
}

export default useStorage;
