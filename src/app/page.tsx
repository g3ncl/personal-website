import React from "react";
import { Github, Linkedin } from "lucide-react";
import styles from "./page.module.scss";
import { getFormattedDatetime } from "@/utils/utils";
import { asciiString } from "../ascii/ascii-text.js";

const Home = () => (
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
          {`My toolbox includes TypeScript, NodeJS, React, Next.js, Python, Docker and SQL.`}
          <br></br>
          {`I'm also experimenting with DevOps practices, implementing CI/CD pipelines
           and deploying applications on cloud (mostly AWS).`}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`EXPERIENCE`}</h2>
        <p>{`I'm currently working as:`}</p>

        <p className={styles.jobPart}>
          {`Software Engineer @ NTT DATA `}
          {`in Milan, Italy `}
          {`~ Dec 2022 → Present`}
        </p>

        <a
          href="https://github.com/g3ncl/resume/releases/latest/download/resume-en.pdf"
          className={styles.link}
        >
          {`Download Resume`}
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`PROJECTS`}</h2>
        <p>{`Curious about what I've been up to? Check out my projects:`}</p>
        <p>
          {`♦`}
          <a href="/snake4d" className={`${styles.link} ${styles.list}`}>
            {`Snake 4D`}
          </a>
        </p>
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
        <p>{`Last updated: ${getFormattedDatetime()}`}</p>
      </footer>
    </div>
  </div>
);

export default Home;
