import React from "react";
import { Github, Linkedin } from "lucide-react";
import styles from "./page.module.scss";
import { getFormattedDatetime } from "@/utils/utils";
import { asciiString } from "../ascii/ascii-text.js";

const Home = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.content}>
      <header className={styles.header}>
        <pre className={styles.asciiArt} role="img" aria-label="g3ncl">
          {asciiString}
        </pre>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`NAME`}</h2>
        <p>{`Claudio Genovese - Software Engineer`}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`DESCRIPTION`}</h2>
        <p>
          {`Hey there! I'm a fullstack develper who loves creating seamless and efficient
          web applications.`}
          <br></br>
          {`My toolbox includes TypeScript, NodeJS, React, Next.js, Python, Java, Docker and SQL.`}
          <br></br>
          {`I'm also experimenting with DevOps practices, implementing CI/CD pipelines
           and deploying applications on cloud (mostly AWS).`}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`EXPERIENCE`}</h2>
        <p>{`I'm currently working as:`}</p>
        <p className={styles.jobPart}>
          {`Software Engineer @ Laura `}
          {`in Milan, Italy `}
          {`~ Jul 2025 → Present`}
        </p>
        <br></br>
        <p>{`Before that, I worked as:`}</p>
        <p className={styles.jobPart}>
          {`Software Engineer @ NTT DATA `}
          {`in Milan, Italy `}
          {`~ Dec 2022 → Jul 2025`}
        </p>
        <br></br>
        <span>Download Resume: </span>
        <a
          className={styles.resumeLink}
          href="https://github.com/g3ncl/resume/releases/latest/download/resume-en.pdf"
        >
          <span className={styles.resumeLinkIcon}>🇬🇧</span>
          <span className={styles.resumeLinkText}> EN</span>
        </a>
        <a
          className={styles.resumeLink}
          href="https://github.com/g3ncl/resume/releases/latest/download/resume-it.pdf"
        >
          <span className={styles.resumeLinkIcon}>🇮🇹</span>
          <span className={styles.resumeLinkText}> IT</span>
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`PROJECTS`}</h2>
        <p>{`Curious about what I've been up to? Check out my projects:`}</p>

        <div className={styles.project}>
          <p>
            {`♦ `}
            <a href="/snake4d" className={styles.list}>{`Snake 4D`}</a>
          </p>
          <span className={styles.description}>
            A mind-bending twist on the classic Snake game, adding an extra
            dimension for even more challenge.
          </span>
        </div>

        <div className={styles.project}>
          <p>
            {`♦ `}
            <a
              href="https://github.com/g3ncl/acc-server-web"
              className={styles.list}
            >
              {`ACC Server Web`}
            </a>
          </p>
          <span className={styles.description}>
            A web UI for managing Assetto Corsa Competizione server, built with
            Next.js, TypeScript and packaged as a Docker container.
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`CONTACT`}</h2>
        <p>{`Let's connect! Find me on:`}</p>
        <ul className={styles.contactList}>
          <li>
            <a
              href="https://github.com/g3ncl"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Github className={styles.icon} size={16} />
              {`github.com`}
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/claudiogenovese"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Linkedin className={styles.icon} size={16} />
              {`linkedin.com`}
            </a>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p className="noSelect">{`Last update: ${getFormattedDatetime()}`}</p>
      </footer>
    </div>
  </div>
);

export default Home;
