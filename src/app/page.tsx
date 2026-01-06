import { getFormattedDatetime } from "@/utils/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full max-w-3xl mx-auto px-4 top-spacing fade-in">
        <section className="mb-8">
          <h1 className="text-ui-1 mb-6">
            Claudio Genovese<span className="blink">_</span>
          </h1>

          <div className="text-ui-2 space-y-4 leading-relaxed">
            <p>
              Software engineer based in Milan, focused on clarity, reliability,
              and craftsmanship.
            </p>

            <p>
              Currently building at{" "}
              <a
                href="https://laura.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Laura
              </a>{" "}
              as a software engineer, where I work across the entire stack —
              from React webapps to Java microservices. Previously spent two and
              a half years at NTT DATA, developing my foundation in enterprise
              software development. I believe deeply in clean code principles
              and the discipline of continuous refactoring — understanding that
              quality software comes from ongoing refinement. I&apos;m also
              passionate about open source philosophy and Linux systems.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-ui-2 mb-4 sub-text">Interests:</h2>
          <p className="text-ui-2">
            Apart from coding, I enjoy motorsport, simracing, cycling, 70s
            progressive rock, and solving tricky problems of any kind.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-ui-2 mb-4 sub-text">Open Source Projects:</h2>

          <div className="text-ui-2 space-y-4">
            <article>
              <h3 className="mb-1">
                <a
                  href="/snake4d"
                  target="_blank"
                  className="link "
                >
                  Snake 4D
                </a>
              </h3>
              <p className="sub-text">
                {"Classic Snake game expanded into four spatial dimensions. "}
                (<a href="https://github.com/g3ncl/snake-4d" target="_blank" className="link">
                  source
                </a>)
              </p>
            </article>

            <article>
              <h3 className="mb-1">
                <a
                  href="https://ghcr.io/g3ncl/acc-server-web:main"
                  target="_blank"
                  className="link "
                >
                  ACC Server Web
                </a>
              </h3>
              <p className="sub-text">
                {"A simple web interface for managing Assetto Corsa Competizione servers, built with Next.js and TypeScript. "}
                (<a href="https://github.com/g3ncl/acc-server-web" target="_blank" className="link">
                  source
                </a>)
              </p>
            </article>

            <article>
              <h3 className="mb-1">
                <a
                  href="/telemetry"
                  target="_blank"
                  className="link "
                >
                  Telemetry
                </a>
              </h3>
              <p className="sub-text">
                {"A web application for extracting, visualizing, and analyzing GPS telemetry data from GoPro video files and other kart telemetry formats. "}
                (<a href="https://github.com/g3ncl/telemetry" target="_blank" className="link">
                  source
                </a>)
              </p>
            </article>
          </div>
        </section>

        <section>
          <nav className="text-ui-2">
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/g3ncl"
                className="link "
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/claudiogenovese/"
                className="link "
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/g3ncl/resume/releases/latest/download/resume-en.pdf"
                className="link"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </nav>
        </section>
      </main>

      <footer className="w-full max-w-3xl mx-auto mt-16 px-4 bottom-spacing fade-in">
        <p className="noSelect sub-text text-ui-3">
          Last update: {getFormattedDatetime()}
        </p>
      </footer>
    </div>
  );
}
