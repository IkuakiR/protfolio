'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/warange/page.module.css';
import { caveat } from "../_app";

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

export default function Home() {
    return (
        <div className={styles.container}>
            <nav className={styles.sidebarLeft}>
                <h1 className={`${styles.logo} ${caveat.className}`}>
                    <Link href="/">IKUAKI RIN&apos;s Portfolio</Link>
                </h1>
                <ul className={styles.navMenu}>
                    <li className={styles.navHeading}>
                        <FaFolderOpen />
                        <span>作品一覧</span></li>
                    <li>
                        <Link
                            href="/warange"
                            className={styles.worksLink}
                        >
                            <span>ウォレンジ/Warange</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/langchat"
                            className={styles.worksLink}>
                            <span>LangChat</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ecoeats"
                            className={`${styles.worksLink} ${styles.nowAt}`}>
                            <span>EcoEats</span>
                        </Link>
                    </li>
                </ul>

                <div className={styles.switcher}>
                    <Link href="/warange" className={`${styles.switchBtn} ${styles.worksBtn}`}>
                        WORKS
                    </Link>
                    <Link href="/about" className={styles.switchBtn}>
                        ABOUT
                    </Link>
                </div>
            </nav>

            <main className={styles.mainWrapper}>
                <div className={styles.mainTop}>EcoEats</div>
                <article className={styles.aboutWork}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>1</span>
                        <h3 className={styles.projectTitle}>作品概要</h3>
                    </header>
                    <div className={styles.projectBody}>
                        <Image
                            src="/images/ecoeatsThum.webp"
                            alt="EcoEats app thumbnail"
                            width={1000}
                            height={1000}
                            className={styles.responsiveThumb}
                        />
                        <p>
                            EcoEatsは廃棄予定の野菜を使ったお弁当を学生に低価格で届けるフードデリバリーアプリです。<br />
                            食品ロス削減と学生の食生活サポートを両立するサービスを目指しました。
                        </p>
                    </div>
                    <div className={styles.tools}>
                        <h3>使用言語&ツール</h3>
                        <ul className={styles.techList}>
                            <li>#TypeScript</li>
                            <li>#Next.js</li>
                            <li>#Figma</li>
                        </ul>
                    </div>
                    <div className={styles.projectLink}>
                        <FaGithub />
                        <Link
                            href="https://github.com/IkuakiR/langchat2"
                            target="_blank"
                        >ソースコードはこちら</Link>
                    </div>
                </article>
                <article className={styles.highlights}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>2</span>
                        <h3 className={styles.projectTitle}>作品のこだわり</h3>
                    </header>
                    <div className={styles.projectBody}>
                        <Image
                            src="/images/ecoPhone1.webp"
                            alt="ecoeats thumbnail"
                            width={1000}
                            height={1000}
                            className={styles.phoneThumb}
                        />
                        <Image
                            src="/images/ecoPhone2.webp"
                            alt="ecoeats thumbnail"
                            width={1000}
                            height={1000}
                            className={styles.phoneThumb}
                        />
                        <div className={styles.highlightsText}>
                            <p className={styles.title}></p>
                            <p>
                                この作品は初めてNext.jsを使って制作したものになります。それまではHTMLを使ってのWeb制作した行ったことがなかったので、Next.jsの仕組みを学ぶのに苦労しましたが、先輩や先生の助けを借りて制作しました。<br />
                                特にこだわった点は、実際のフードデリバリーアプリに必要な要素を考え、ユーザーが使いやすいようにフッターに置く要素を決めたり、画面の遷移フローを考えた点です。<br />
                                また、この制作でログインフォームのデザインを設計したことが、それ以降の作品のアプリやサイトデザインでも活かされたと思います。
                            </p>
                        </div>
                    </div>
                </article>
                <article className={styles.reviewPoints}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>3</span>
                        <h3 className={styles.projectTitle}>学び・反省</h3>
                    </header>
                    <div className={styles.projectBody}>
                        {/* <Image
                            src="/images/ecoeatsThum.webp"
                            alt="ecoeats thumbnail"
                            width={206}
                            height={116}
                            className={styles.responsiveThumb}
                        /> */}
                        <div className={styles.reviewText}>
                            <p>
                                Next.jsによる制作が初めてということもあり、画面のコーディングに予想以上に時間がかかってしまったことが反省点となります。<br />
                                原因としては、自分の制作で初めてフレームワークを使ったということで、授業の評価までにコーディングを行う時間の配分ができていなかったことが挙げられます。<br />
                                これ以降の制作では、この制作でのNext.jsのつまづいた部分の復習を行い、コーディングの質や時間配分を意識できたことが学びになっています。
                            </p>
                        </div>
                    </div>
                </article>
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
    );
}
