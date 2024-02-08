import Link from "next/link";
import styles from "./PostCard.module.css";
import Image from "next/image";

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    {
                        post.image && <Image
                            src={post.image}
                            fill
                            alt=""
                            className={styles.img}
                        />
                    }
                </div>
                <span className={styles.date}>01.02.24</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>
                    {post.body}
                </p>
                <Link
                    className={styles.link}
                    href={`/blog/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    );
};

export default PostCard;