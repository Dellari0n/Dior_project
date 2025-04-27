import styles from "./Header.module.scss"

import { Logo } from "@/components/Logo"
import { Menu } from "@/components/Menu"
import { ShopPanel } from "@/components/ShopPanel"



export function Header(){
    return(
        <header className={styles.header}>
            <Logo/>
            <h2 className={styles.header__title}>
                LA COLLECTION PRIVÉE CHRISTIAN DIOR
            </h2>
            <nav className="menu">
                <Menu/>
            </nav>
            <div className="shop_panel">
                <ShopPanel/>
            </div>
        </header>
    )
}