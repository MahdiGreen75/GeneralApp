"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css"

const NavLink = ({ itm }) => {
    const pathName = usePathname();
    const active = (pathName === itm.path)
    // console.log(active);
    return (
        <>
            <Link key={itm.id}
                href={itm.path}
                className={`${styles.container} ${active && styles.active}`}
            >
                {itm.title}
            </Link>
        </>
    );
};

export default NavLink;