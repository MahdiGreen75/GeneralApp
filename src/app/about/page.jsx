import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
    title: "About page",
    description: "..."
}

const AboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>About Agency</h2>
                    <h1 className={styles.subtitle}>
                        We create digital ideas that are bigger, better, bolder and better. 
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit explicabo magnam officiis rerum, laudantium beatae animi cum. Ipsam ab, aperiam accusamus alias reprehenderit laudantium odit eius? Esse asperiores enim dolorum. Ea eos alias cumque velit voluptas deleniti, ratione quaerat illo!
                    </p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className={styles.box}>
                            <h1>10 K+</h1>
                            <p>Years of experience</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        src={"/about.png"}
                        alt=""
                        fill // now, the image will fill it's container.
                        // width={500}
                        // height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
