'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import { caveat } from "./_app";

import { FaIdCard } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
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
        <div className={styles.mainTop}>HOME</div>
        <section className={styles.hello}>
          <h2 className={`${styles.headline} ${caveat.className}`}>Hi! My name is IKUAKI RIN!</h2>
          <p className={`${styles.subtext} ${caveat.className}`}>
            I’m a student from ECC Comp. <br />
            Thanks for stopping by! I hope you enjoy my portfolio.
          </p>
        </section>
        <Image
          src="/images/mainBg.webp"
          alt="Main background image"
          width={1200}
          height={600}
          className={styles.mainBg}
        />
        <article className={styles.projectContainer}>
          <header className={styles.projectHeader}>
            <span className={styles.badge}>2年<br />後期</span>
            <h3 className={styles.projectTitle}>ウォレンジ / Warange</h3>
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
          <Link href="/warange" className={styles.detailLink}>
            作品詳細を見る
          </Link>
        </article>
        <article className={styles.projectContainer}>
          <header className={styles.projectHeader}>
            <span className={styles.badge}>2年<br />後期</span>
            <h3 className={styles.projectTitle}>LangChat</h3>
          </header>
          <div className={styles.projectBody}>
            <Image
              src="/images/langchatThum.webp"
              alt="langchat thumbnail"
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
          <Link href="/langchat" className={styles.detailLink}>
            作品詳細を見る
          </Link>
        </article>
        <article className={styles.projectContainer}>
          <header className={styles.projectHeader}>
            <span className={styles.badge}>1年<br />後期</span>
            <h3 className={styles.projectTitle}>EcoEats</h3>
          </header>
          <div className={styles.projectBody}>
            <Image
              src="/images/ecoeatsThum.webp"
              alt="ecoeats thumbnail"
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
          <Link href="/ecoeats" className={styles.detailLink}>
            作品詳細を見る
          </Link>
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
