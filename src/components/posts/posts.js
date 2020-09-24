import React, { useEffect, useState } from 'react';
import './posts.css';

const Posts = ({ posts }) => {

  return (
    <div className="Posts">
      {posts.map(post => (
        <div key={post.id}>
          <h1>
            {post.title}
          </h1>
          <h4>
            {post.body}
          </h4>
        </div>
      ))}
    </div>
  )
};
export default Posts;