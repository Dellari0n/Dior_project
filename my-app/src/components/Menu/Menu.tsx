import styles from "./Menu.module.scss"

export function Menu(){
    return(
        <ul className="menu__list">
            <li className="menu__item">
                <h3 className="menu__item-text">
                    WOMEN'S FRAGRANCE
                </h3>
            </li>
            <li className="menu__item">
                <h3 className="menu__item-text">
                    MEN'S FRAGRANCE
                </h3>
            </li>
            <li className="menu__item">
                <h3 className="menu__item-text">
                    MAKEUP
                </h3>
            </li>
            <li className="menu__item">
                <h3 className="menu__item-text">
                    SKINCARE
                </h3>
            </li>
            <li className="menu__item">
                <h3 className="menu__item-text">
                    DIOR SPA
                </h3>
            </li>
        </ul>
    )}