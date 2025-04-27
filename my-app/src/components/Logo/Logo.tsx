import Image from "next/image"
import styles from "./Logo.module.scss"
import Link from "next/link"

export function Logo(){
    return(<>
    <Link href={"#"}>
        <Image
            className={styles.logo__img}
            alt="logo"
            src={'/img/logo.svg'}
            width={120} 
            height={50} 
        />
    </Link>
    </>)
}