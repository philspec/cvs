export const dynamic = 'force-dynamic'

export default async function ServerComponent() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    console.log("server");
    return <PostsDisplay posts={posts} />;
}

function PostsDisplay({ posts }) {
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}