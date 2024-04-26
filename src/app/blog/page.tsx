import Navbar from '@/components/Navbar';
import { PostType } from '@/types/type';
import PostCard from './components/PostCard';
import { format } from '@formkit/tempo'

async function GetPosts() {
    const res = await fetch('https://spotterapp.onrender.com/post/options/');
    const data = await res.json();
    return data;
}

export default async function BlogPage() {
    const Posts: PostType[] = await GetPosts();
    Posts.forEach(post => {
        post.PostFechaCreacion = format(post.PostFechaCreacion).toLocaleString();
    });

    return (
        <>
            <Navbar />
            <section id='blog' className="text-white mt-20 px-20 pb-32" >
                <h1 className="font-bold text-3xl mb-5">
                    All Posts
                </h1>
                <div className="grid grid-cols-3 mt-14">
                    {
                        Posts.map((post, index) => (
                            <PostCard key={index} {...post} />
                        ))
                    }
                </div>
            </section>
        </>
    )
}
