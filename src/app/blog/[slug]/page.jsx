import Image from "next/image";
import styles from "./singlePostPage.module.css"
const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src={"https://images.pexels.com/photos/19107293/pexels-photo-19107293/free-photo-of-books-in-english-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    fill
                    alt=""
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <div className={styles.intor_parent}>
                        <div className={styles.avaterImgDetail}>
                            <Image
                                src={"https://images.pexels.com/photos/19107293/pexels-photo-19107293/free-photo-of-books-in-english-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                                alt=""
                                fill
                                className={styles.avaterImg}
                            />
                        </div>
                        <div className={styles.intro}>
                            <div className={styles.detailText}>
                                <span className={styles.detailTitle}>
                                    Author
                                </span>
                                <span className={styles.datailValue}>
                                    Terry Jeff
                                </span>
                            </div>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iure ipsa fuga asperiores quod voluptatibus numquam omnis debitis ut excepturi itaque voluptate a, culpa accusamus modi eos, eius eligendi? Perspiciatis?
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePostPage;