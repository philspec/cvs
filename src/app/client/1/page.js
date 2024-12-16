"use client"

import useState from "react";

export default function ClientComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Client Component</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>You clicked {count} times</p>
        </div>
    );
}