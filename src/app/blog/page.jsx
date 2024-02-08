import PostCard from "@/components/PostCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

export const metadata = {
    title: "Blog page",
    description: "..."
}

// TECHNICH 1: FETCH DATA USING AN API
// const getData = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//         next: {
//             revalidate: 3600 // changes every one hour
//         }
//     });

//     if (!res.ok) {
//         throw new Error();
//     }

//     return res.json();
// }


// TECHNICH 2: FETCH DATA WITHOUT USING AN API


const BlogPage = async () => {

    // TECHNICH 1: FETCH DATA USING AN API 
    // const posts = await getData();

    // TECHNICH 2: FETCH DATA WITHOUT USING AN API
    const posts = await getPosts();


    return (
        <div className={styles.container}>
            {
                posts.map(post =>
                    <div key={post.id} className={styles.post}>
                        <PostCard post={post}></PostCard>
                    </div>)
            }
        </div>
    );
};

export default BlogPage;