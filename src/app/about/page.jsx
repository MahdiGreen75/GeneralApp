import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <Image
                    src={"/about.png"}
                    alt=""
                    // fill // now, the image will fill it's container.
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default AboutPage;
