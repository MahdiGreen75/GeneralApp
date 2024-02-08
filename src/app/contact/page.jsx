import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
    title: "Contact page",
    description: "..."
}

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/contact.png" alt=" " className={styles.img} fill/>
            </div>
            <div className={styles.formContainer}>
                <form action="server action" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" name="" />
                    <input type="text" placeholder="Email address" name="" />
                    <input type="text" placeholder="Phone Number (Optional)" name="" />
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        placeholder=""
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;