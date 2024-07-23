import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import styles from "./page.module.scss";

const Home = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <header className={styles.header}>
        <h1 className={styles.title}>{`G3N.CL`}</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`NAME`}</h2>
        <p>
          {`g3n.cl - Your friendly neighborhood Fullstack Developer & DevOps
          Enthusiast`}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`SYNOPSIS`}</h2>
        <p>{`g3n.cl [--code] [--deploy] [--enjoy]`}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`DESCRIPTION`}</h2>
        <p>
          {`Hey there! I'm a fullstack dev who loves creating seamless, efficient
          web applications. My toolbox includes Next.js, React, and TypeScript.
          I'm also a big fan of DevOps practices, implementing CI/CD pipelines,
          and deploying applications on cloud (usually AWS). Life is too short
          to do otherwise.`}
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`PROJECTS`}</h2>
        <p>{`Curious about what I've been up to? Check out my projects:`}</p>
        <a href="/snake4d" className={styles.link}>
          Snake 4D
        </a>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{`CONTACT`}</h2>
        <p className={styles.mb2}>{`Let's connect! Find me on:`}</p>
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
          <li>
            <a href="https://g3n.cl" className={styles.contactLink}>
              <Globe className={styles.icon} size={16} />
              {`g3n.cl`}
            </a>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>{`Last updated: ${new Date().toLocaleString()}`}</p>
      </footer>
    </div>
  </div>
);

export default Home;
