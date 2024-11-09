import Link from "next/link";
import styles from "./index.module.css";
import { useRouter } from 'next/router';


function Header() {
    const router = useRouter();
    return (
    <header className={styles.header}>
      {!router.pathname.includes("add-update") && <Link href={'/add-update/new'}>+</Link>}
      {router.pathname != '/languages' &&  <Link href={'/languages'}>←</Link>}
    </header>
    );
}

export default Header;