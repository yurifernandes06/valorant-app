import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img 
                    src="https://freelogopng.com/images/all_img/1664302686valorant-icon-png.png" 
                    alt="Valorant Logo" 
                    className={styles.logo}
                />
                <h1 className={styles.title}>Valorant</h1>
            </div>
            <nav className={styles.nav}>
                <button>
                    <Link className={styles.link} href="/">
                        Home
                    </Link>
                </button>
                <button>
                    <Link className={styles.link} href="/page/agents">
                        Agents
                    </Link>
                </button>
                <button>
                    <Link className={styles.link} href="/page/maps">
                        Maps
                    </Link>
                </button>
                <button>
                    <Link className={styles.link} href="/page/skins">
                        Skins
                    </Link>
                </button>
            </nav>
        </header>
    )
};

export default Header;
