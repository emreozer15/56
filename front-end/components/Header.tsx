import Link from "next/link";
import styles from '@/styles/Home.module.css'


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <a className={styles.header_a}>
                {" "}
                Blogs App
            </a>
            <nav className={styles.nav}>
                <Link href="/" className={styles.nav_Link}>
                    Home
                </Link>
                <Link href="/users" className={styles.nav_Link}>
                    Users
                </Link>
                <Link href="/blogs" className={styles.nav_Link}>
                    Blogs
                </Link>
            </nav>
        </header>
    )
}


export default Header;


