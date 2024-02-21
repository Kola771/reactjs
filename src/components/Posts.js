// components/Posts.js
import React from 'react';
import data from '../Jsons/publications.json';

function Posts() {
  return (
    <div>
      <h2>Publications</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
