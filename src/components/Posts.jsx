import { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>res.json()).then((data) => setPosts(data))
    })
  return (
    <div className='flex flex-wrap gap-4 p-10'>
        {posts.map((post) => (
            <div className='border rounded p-4 bg-gray-200 text-gray-500 w-[300px]' key={post.id}>
                <h3 className='font-bold mb-2'>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}
