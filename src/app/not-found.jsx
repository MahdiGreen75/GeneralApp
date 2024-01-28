import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            404 not found. custom page.    
            <br />
            <Link href={"/"}>Return Home</Link>        
        </div>
    );
};

export default NotFound;