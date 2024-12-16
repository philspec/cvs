"use client"

import { useState, useEffect, useMemo } from 'react';

export default function ClientComponent() {
    const [posts, setPosts] = useState([]);

    const memoizedPosts = useMemo(() => {
        async function fetchData() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        fetchData();
        return posts;
    }, []);

    useEffect(() => {
        if (memoizedPosts && memoizedPosts.length > 0) {
            setPosts(memoizedPosts);
        }
    }, [memoizedPosts]);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}