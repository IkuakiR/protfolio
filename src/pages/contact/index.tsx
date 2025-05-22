'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/contact/page.module.css'
import { caveat } from '../_app'
import {
    FaFolderOpen,
    FaIdCard,
    FaPaperPlane,
    FaEnvelope,
    FaMobileScreenButton,
    FaGithub,
    FaBuildingColumns,
    FaGraduationCap,
    FaLocationDot,
    FaGlobe,
} from 'react-icons/fa6'

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <nav className={styles.sidebarLeft}>
                <h1 className={`${styles.logo} ${caveat.className}`}>
                    <Link href="/">IKUAKI RIN&apos;s Portfolio</Link>
                </h1>
                <ul className={styles.navMenu}>
                    <li>
                        <Link href="/warange" className={styles.navLink}>
                            <FaFolderOpen />
                            <span>作品一覧</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={styles.navLink}>
                            <FaIdCard />
                            <span>自己紹介</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.navLink}>
                            <FaPaperPlane />
                            <span>コンタクト</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className={styles.mainWrapper}>
                <div className={styles.mainTop}>CONTACT</div>
                <section className={styles.contactSection}>
                    <div className={styles.contactBody}>
                        <h2 className={styles.contactTitle}>ご質問等ございましたら以下より<br />
                            お気軽にご連絡ください！
                        </h2>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaEnvelope />
                                <a href="mailto:liniukaki311@gmail.com">liniukaki311@gmail.com</a>
                            </li>
                            <li className={styles.contactItem}>
                                <FaMobileScreenButton />
                                080-3906-5889
                            </li>
                            <li className={styles.contactItem}>
                                <FaGithub />
                                <a
                                    href="https://github.com/IkuakiR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    github.com/IkuakiR
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>

            <aside className={styles.sidebarRight}>
                <section className={styles.aboutCard} id="about">
                    <h2>About Me</h2>
                    <div className={styles.profile}>
                        <Image
                            src="/images/myPhoto.webp"
                            alt="Profile photo"
                            width={100}
                            height={100}
                            className={styles.profileImg}
                        />
                        <div className={styles.name}>
                            <span className={styles.nameEN}>Ikuaki Rin</span>
                            <br />
                            <span className={styles.nameJP}>林 煜昭</span>
                        </div>
                    </div>
                    <ul className={styles.aboutList}>
                        <span className={styles.aboutContent}>
                            <FaBuildingColumns />
                            <li>ECCコンピュータ専門学校</li>
                        </span>
                        <span className={styles.aboutContent}>
                            <FaGraduationCap />
                            <li>2026年3月卒業見込み</li>
                        </span>
                        <span className={styles.aboutContent}>
                            <FaLocationDot />
                            <li>大阪府</li>
                        </span>
                    </ul>
                    <Link href="/about" className={styles.moreProfile}>
                        もっと見る
                    </Link>
                </section>
            </aside>
        </div>
    )
}