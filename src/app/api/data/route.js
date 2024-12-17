export async function GET(request) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log("data is fetched");
  
    return Response.json({ data })
  }