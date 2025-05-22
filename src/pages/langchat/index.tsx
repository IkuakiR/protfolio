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
                            className={`${styles.worksLink} ${styles.nowAt}`}>
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
                <div className={styles.mainTop}>LangChat</div>
                <article className={styles.aboutWork}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>1</span>
                        <h3 className={styles.projectTitle}>作品概要</h3>
                    </header>
                    <div className={styles.projectBody}>
                        <Image
                            src="/images/langchatThum.webp"
                            alt="LangChat app thumbnail"
                            width={1000}
                            height={1000}
                            className={styles.responsiveThumb}
                        />
                        <p>
                            LangChatでは海外の人との交流を通じて楽しく外国語を勉強することができます。<br />
                            自動翻訳機能やブックマーク機能で、難なく外国語を身につけよう。
                        </p>
                    </div>
                    <div className={styles.tools}>
                        <h3>使用言語&ツール</h3>
                        <ul className={styles.techList}>
                            <li>#TypeScript</li>
                            <li>#Next.js</li>
                            <li>#Firebase</li>
                            <li>#Figma</li>
                            <li>#SkyWay</li>
                        </ul>
                    </div>
                    <div className={styles.projectLink}>
                        <span>
                            <FaGlobe />
                            <Link
                                href="https://langchat2.vercel.app/"
                                target="_blank"
                            >サイトを見る</Link>
                        </span>
                        <span>
                            <FaGithub />
                            <Link
                                href="https://github.com/IkuakiR/langchat2"
                                target="_blank"
                            >ソースコードはこちら</Link>
                        </span>
                    </div>
                </article>
                <article className={styles.highlights}>
                    <header className={styles.projectHeader}>
                        <span className={styles.badge}>2</span>
                        <h3 className={styles.projectTitle}>作品のこだわり</h3>
                    </header>
                    <div className={styles.projectBody}>
                        <Image
                            src="/images/langTop.webp"
                            alt="langchat Home"
                            width={1000}
                            height={1000}
                            className={styles.responsiveThumb}
                        />
                        {/* <Image
                            src="/images/waraPhone2.webp"
                            alt="langchat thumbnail"
                            width={206}
                            height={116}
                            className={styles.phoneThumb}
                        /> */}
                        <div className={styles.highlightsText}>
                            <p className={styles.title}></p>
                            <p>
                                趣味や言語など、多方面から話の相手を探すことができるので誰でも簡単に外国の方と会話を楽しめます。最初に相手の顔や評価を見れるので、初めての方でも安心してご利用いただけます。<br />
                                また、チャット内では相手から送られてきたメッセージの自動翻訳機能がついているので言葉が通じなくても難なく会話することができます。<br />
                                いいなと思ったフレーズや表現についてはブックマーク機能を使って保存しておくことができるので、後から振り返ることも可能です。<br />
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
                                この作品では初めてFirebaseを使用し、その中でデータベースの組み立てかたやAPI設計について学びました。特にデータベースに関してはこれまで先輩が使っていたのを見ていただけだったので、自分で使ってみることで初めて書き方やロジックについて知ることができました。<br />
                                データベースはバックエンドの初歩だと思いますが、これからの作品制作や仕事でも必ず使うものなので、しっかりと理解を深め自分のものにしていきたいです。<br />
                                反省としましては、ビデオ通話機能を実装しようとしていたのですが最初にユーザー認証を実装していなかったため、ユーザーの特定ができず断念したことです。
                                今後はそのようなことがないよう、最初に全体の設計をしっかりと考えた上で制作を進めていきたいと思います。<br />
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
