'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/about/page.module.css'
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
    FaEarthAsia,
} from 'react-icons/fa6'


export default function WarangePage() {
    const [activeSection, setActiveSection] = useState<'intro' | 'vision' | 'belief'>('intro')

    const handleNavClick = (id: typeof activeSection) => (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(id)
    }

    return (
        <div className={styles.container}>
            <nav className={styles.sidebarLeft}>
                <h1 className={`${styles.logo} ${caveat.className}`}>
                    <Link href="/">IKUAKI RIN&apos;s Portfolio</Link>
                </h1>
                <ul className={styles.navMenu}>
                    <li className={styles.navHeading}>
                        <FaIdCard />
                        自己紹介
                    </li>
                    <li>
                        <a
                            href="#intro"
                            onClick={handleNavClick('intro')}
                            className={`${styles.aboutLink} ${activeSection === 'intro' ? styles.nowAt : ''}`}
                        >
                            簡単な自己紹介
                        </a>
                    </li>
                    <li>
                        <a
                            href="#vision"
                            onClick={handleNavClick('vision')}
                            className={`${styles.aboutLink} ${activeSection === 'vision' ? styles.nowAt : ''}`}
                        >
                            なりたい人物像
                        </a>
                    </li>
                    <li>
                        <a
                            href="#belief"
                            onClick={handleNavClick('belief')}
                            className={`${styles.aboutLink} ${activeSection === 'belief' ? styles.nowAt : ''}`}
                        >
                            自分の信念
                        </a>
                    </li>
                </ul>
                <div className={styles.switcher}>
                    <Link href="/warange" className={styles.switchBtn}>WORKS</Link>
                    <Link href="/about" className={`${styles.switchBtn} ${styles.worksBtn}`}>ABOUT</Link>
                </div>
            </nav>

            <main className={styles.mainWrapper}>
                <div className={styles.mainTop}>About Me</div>

                <article id="intro" className={styles.aboutIntro}>
                    <header className={styles.aboutHeader}>
                        <span className={styles.badge}>1</span>
                        <h3 className={styles.aboutTitle}>簡単な自己紹介をどうぞ！</h3>
                    </header>
                    <div className={styles.aboutBody}>
                        <Image
                            src="/images/myPhoto2.webp"
                            alt="Profile"
                            width={206}
                            height={116}
                            className={styles.responsiveThumb}
                        />
                        <div className={styles.introText}>
                            <p>林 煜昭と申します。現在ECCコンピュータ専門学校の2年次を修了し、2026年3月に卒業見込みです。将来はWebデザインのみならずフルスタックに活躍できるエンジニアになりたいと考えています。</p>
                            <ul className={styles.introList}>
                                <span className={styles.aboutContent}>
                                    <FaEarthAsia />
                                    <li>🇨🇳中国出身</li>
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
                        </div>
                    </div>
                </article>

                <article id="vision" className={styles.myVision}>
                    <header className={styles.aboutHeader}>
                        <span className={styles.badge}>2</span>
                        <h3 className={styles.aboutTitle}>自分がなりたい人物像とは？</h3>
                    </header>
                    <div className={styles.aboutBody}>
                        <p>チームや周囲の状況をよく観察し、誰かが困っているときに自然とサポートできるエンジニアを目指しています。自分自身の成長だけでなく周りのメンバーの課題にも気づき解決していくことで、チーム全体を成長させられる存在になりたいと考えています。</p>
                    </div>
                </article>

                <article id="belief" className={styles.myBelief}>
                    <header className={styles.aboutHeader}>
                        <span className={styles.badge}>3</span>
                        <h3 className={styles.aboutTitle}>自分の信念を教えてください</h3>
                    </header>
                    <div className={styles.aboutBody}>
                        <p>
                            <span className={styles.motto}>「夢は逃げない。逃げるのはいつも自分だ。」</span><br />
                            私は自分の目標から決して目をそらさず、挑戦し続ける姿勢を大切にしています。誰だって最初は挑戦者なので、困難や壁にぶつかっても最初から「できない」と決めつけず、一歩ずつ前に進むことで道は拓けると信じています。エンジニアとしても一人の人間としても諦めずに挑み続け、自分の夢に近づいていきたいです。
                        </p>
                    </div>
                </article>
            </main>

            <aside className={styles.sidebarRight}>
                <section className={styles.contactCard}>
                    <h2>CONTACT</h2>
                    <ul className={styles.contactList}>
                        <li className={styles.contactContent}>
                            <FaEnvelope />
                            <a href="mailto:liniukaki311@gmail.com">liniukaki311@gmail.com</a>
                        </li>
                        <li className={styles.contactContent}>
                            <FaMobileScreenButton />
                            080-3906-5889
                        </li>
                        <li className={styles.contactContent}>
                            <FaGithub />
                            <a
                                href="https://github.com/IkuakiR"
                                target="_blank"
                                rel="noreferrer"
                            >
                                IkuakiR
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
    )
}
