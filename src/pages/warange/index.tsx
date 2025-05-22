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
                            className={`${styles.worksLink} ${styles.nowAt}`}
                        >
                            <span>ウォレンジ/Warange</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/langchat" className={styles.worksLink}>
                            <span>LangChat</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ecoeats" className={styles.worksLink}>
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
                <div className={styles.mainTop}>ウォレンジ/Warange</div>
                <article className={styles.aboutWork}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>1</span>
                        <h3 className={styles.projectTitle}>作品概要</h3>
                    </header>
                    <div className={styles.projectBody}>
                        <Image
                            src="/images/warangeThum.webp"
                            alt="Warange app thumbnail"
                            width={1000}
                            height={1000}
                            className={styles.responsiveThumb}
                        />
                        <p>
                            ウォレンジは貯金をゲーム化することで、これまで続かなかった貯金習慣を楽しく継続できるアプリです。<br />
                            ユーザー同士でキャラクターを育てながら、視覚的に貯金額を把握できるのでモチベーションを高められます。
                        </p>
                    </div>
                    <div className={styles.tools}>
                        <h3>使用言語&ツール</h3>
                        <ul className={styles.techList}>
                            <li>#TypeScript</li>
                            <li>#Next.js</li>
                            <li>#Firebase</li>
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
                            src="/images/waraPhone1.webp"
                            alt="langchat thumbnail"
                            width={1000}
                            height={116}
                            className={styles.phoneThumb}
                        />
                        <Image
                            src="/images/waraPhone2.webp"
                            alt="langchat thumbnail"
                            width={1000}
                            height={116}
                            className={styles.phoneThumb}
                        />
                        <div className={styles.highlightsText}>
                            <p className={styles.title}>ゲーム感覚で楽しく！</p>
                            <p>
                                一人きりだとどうしても継続しにくい貯金という行為も、友人や家族とゲーム感覚で貯金額を競い合えるので、楽しみながら続けられる習慣に変わります。<br />
                                また、GitHubの草(コントリビューション)をつけることで貯金額を視覚的に確認することができ、貯金額がわかりやすいだけでなくモチベーションの維持にもつながります。
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
                                この制作ではチームリーダーとして、後輩メンバーと制作を行いました。後輩に教えながら作るという経験は初めてだったのですが、
                                最初にわからないところのヒアリングを行い個々に合った練習課題を渡し、無理なくステップアップできるように工夫しました。<br />
                                一方で進捗の管理や確認にばらつきがあり、もっと早く課題を解消できたのではないかと反省しています。次回はチーム全体の状況をより広く把握できるようにしたいです。

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
