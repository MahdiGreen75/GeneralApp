import Image from "next/image";
import styles from "./singlePostPage.module.css"
import PostUser from "@/components/PostUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
    const id = params.slug;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.desc
    }
}

// TECHNICH 1: FETCH DATA USING AN API
// const getData = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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


const SinglePostPage = async ({ params }) => {

    const id = params.slug;

    // TECHNICH 1: FETCH DATA USING AN API
    // const post = await getData(id);

    // TECHNICH 2: FETCH DATA WITHOUT USING AN API
    const post = await getPost(id);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={post.image}
                    fill
                    alt=""
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <div className={styles.intor_parent}>
                        <div className={styles.avaterImgDetail}>
                            {
                                <Image
                                    src={post.image ? post.image : "/noavatar.png"}
                                    alt=""
                                    fill
                                    className={styles.avaterImg}
                                />
                            }
                        </div>
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser id={post.userId} />
                        </Suspense>
                        <div className={styles.intro}>
                            <div className={styles.detailText}>
                                <span className={styles.detailTitle}>
                                    Published
                                </span>
                                <span className={styles.datailValue}>
                                    01.01.24
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {post.desc}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;