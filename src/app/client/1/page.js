"use client"
 
import { useState, useEffect } from 'react';

export default function ClientComponent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        fetchData();
    }, []);
    console.log("client");
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}