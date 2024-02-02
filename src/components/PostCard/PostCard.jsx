import Link from "next/link";
import styles from "./PostCard.module.css";
import Image from "next/image";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image
                        src={"https://images.pexels.com/photos/19107293/pexels-photo-19107293/free-photo-of-books-in-english-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        fill
                        alt=""
                        className={styles.img}
                    />
                </div>
                <span className={styles.date}>01.02.24</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis vel qui expedita assumenda quos, perferendis fuga 
                </p>
                <Link
                    className={styles.link}
                    href={"/blog/post"}>READ MORE</Link>
            </div>
        </div>
    );
};

export default PostCard;