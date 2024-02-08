import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css"

// TECHNICH 1: FETCH DATA USING AN API
// const getData = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//         cache: "no-store"
//     })

//     if (!res.ok) {
//         throw new Error();
//     }

//     return res.json();
// }

// TECHNICH 2: FETCH DATA WITHOUT USING AN API


const PostUser = async ({ id }) => {
    // TECHNICH 1: FETCH DATA USING AN API
    // const user = await getData(id);

    // TECHNICH 2: FETCH DATA WITHOUT USING AN API
    const user = await getUser(id);

    return (
        <div className={styles.detailText}>
            <span className={styles.detailTitle}>
                Author
            </span>
            <span className={styles.datailValue}>
                {user.name}
            </span>
        </div>
    );
};

export default PostUser;