import Image from "next/image"
import styles from "./ShopPanel.module.scss"

export function ShopPanel(){
    return(
        <ul className="shop_panel__list">
            <li className="shop_panel__item">
                <Image 
                className={styles.shop_panel__img}
                alt="heart"
                src={'/img/heart.svg'}
                width={23} 
                height={12} 
                />
            </li>
            <li className="shop_panel__item">
                <Image 
                className={styles.shop_panel__img}
                alt="heart"
                src={'/img/shop.svg'}
                width={20} 
                height={22} 
                />
            </li>
        </ul>
    )}