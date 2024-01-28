import styles from "./Links.module.css"
import NavLink from "./NavLink/NavLink";

const Links = () => {
    const links = [
        {
            id: 1,
            title: "Homepage",
            path: "/"
        },
        {
            id: 2,
            title: "About",
            path: "/about"
        },
        {
            id: 3,
            title: "Contact",
            path: "/contact"
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog"
        },
    ]

    return (
        <div className={styles.links}>
            {
                links.map(itm =><NavLink itm={itm} key={itm.id}></NavLink>)
            }
        </div>
    );
};

export default Links;