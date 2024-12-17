"use client"

import { useState } from "react";

export default function ClientComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/data');
            const jsonData = await res.json();
            setData(jsonData.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };
    console.log("Client component rendered");
    return (
        <div>
            <button onClick={fetchData} disabled={loading}>
                {loading ? "Fetching..." : "Fetch Data"}
            </button>

            {data && (
                <div>
                    <h2 >Fetched Data:</h2>
                    <ul >
                        {data.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}