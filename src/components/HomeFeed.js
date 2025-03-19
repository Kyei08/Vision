import React, { useState, useEffect, useRef } from 'react';
import './HomeFeed.css';

const samplePosts = [
  "Learning React is fun!",
  "Just deployed a new feature.",
  "Exploring Node.js and Express.",
  "Live coding session now!",
  "Check out my latest project."
];

const trendingTopics = ["React", "Node.js", "WebDev", "JavaScript", "CSS"];

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);
  const feedRef = useRef(null);

  // Simulate live post creation every 4 seconds.
  useEffect(() => {
    const addPostInterval = setInterval(() => {
      setPosts(prev => {
        const newPost = {
          id: Date.now(),
          content: samplePosts[Math.floor(Math.random() * samplePosts.length)],
          author: "User" + Math.floor(Math.random() * 1000)
        };
        return [newPost, ...prev];
      });
    }, 4000);
    return () => clearInterval(addPostInterval);
  }, []);

  // Infinite scroll: load more posts when scrolling near bottom.
  useEffect(() => {
    const onScroll = () => {
      if (feedRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = feedRef.current;
        if (scrollTop + clientHeight > scrollHeight - 50) {
          // Simulate loading more posts (here just duplicate current posts)
          setPosts(prev => [...prev, ...prev.slice(0, 3)]);
        }
      }
    };
    const feedCurrent = feedRef.current;
    feedCurrent && feedCurrent.addEventListener('scroll', onScroll);
    return () => feedCurrent && feedCurrent.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="homefeed-container">
      <div className="feed" ref={feedRef}>
        {posts.map(post => (
          <div key={post.id} className="post">
            <h4>{post.author}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <aside className="trending">
        <h3>Trending</h3>
        <ul>
          {trendingTopics.map(topic => (
            <li key={topic}>#{topic}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default HomeFeed;