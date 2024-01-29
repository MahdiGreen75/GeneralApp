"use client";
import { useState } from "react";
import styles from "./Links.module.css"
import NavLink from "./NavLink/NavLink";

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
const Links = () => {
    const [open, setOpen] = useState(false);

    // check is authenticated?
    // check is admin?
    const isSession = true;
    const isAdmin = false;

    const navlinks = <>
        {
            links.map(itm => <NavLink itm={itm} key={itm.id}></NavLink>)
        }
        {
            isSession ?
                <>
                    {
                        isAdmin && <NavLink itm={{ id: 5, path: "/admin", title: "Admin" }}></NavLink>
                    }
                    <button className={styles.logout}>Logout</button>

                </>
                :
                <>
                    <NavLink
                        itm={{ id: 6, path: "/login", title: "Login" }}
                    >
                    </NavLink>
                </>
        }
    </>

    return (
        <div>
            <div className={styles.links}>
                {navlinks}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open &&
                <div className={styles.mobileLinks}>
                    {navlinks}
                </div>
            }
        </div>
    );
};

export default Links;