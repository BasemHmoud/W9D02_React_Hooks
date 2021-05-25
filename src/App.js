import React, { useState, useEffect } from "react";

const [posts, setPosts] = useState([
  {
    userId: 1,
    id: 200,
    title: "basem",
    body: "hi",
  },
  { userId: 2, id: 500, title: "hmoud", body: "hello" },
]);
const [userId, setUserId] = useState(0);
const [id, setId] = useState(0);
const [title, setTitle] = useState("");
const [body, setBody] = useState("");

// jsx
export default function App() {
  <div>
    <h1>Blog App</h1>
    <p>{posts}</p>
    <button>Submit</button>
    <input type="text" placeholder="userId" onChange={(e)=>{setUserId(e.target.value)}}/>
    <input type="text" placeholder="id" onChange={(e)=>{setId(e.target.value)}}/>
    <input type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type="text" placeholder="body" onChange={(e)=>{setBody(e.target.value)}}/>
  </div>;
}
