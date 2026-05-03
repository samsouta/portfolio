import { ResumeButton } from "@/ui/ResumeButton";

export default function Landing() {
  return (
    <main className="liquid-page">
      <svg className="liquid-noise-source" aria-hidden="true">
        <filter id="liquid-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.12" />
          </feComponentTransfer>
        </filter>
      </svg>

      <section className="liquid-panel" aria-label="Liquid Glass desktop UI kit preview">
        <div className="panel-noise" />

        <header className="liquid-header">
          <div>
            <h1>Hello, I&apos;m Samsouta ...</h1>
            <p>💻 Full-Stack | Problem Solver | Lifelong Learner</p>
          </div>
        </header>

        <div className="workspace">
          <div className="actions">
            <ResumeButton />
            <button className="button-secondary glass-hover" type="button">
              Contact
            </button>
          </div>

          <div className="avatar-orbit glass-hover" aria-label="Profile avatar">
            <div className="avatar-glass">
              <div className="avatar-head" />
              <div className="avatar-body" />
            </div>
          </div>

          <form className="search-bar" aria-label="Search files">
            <span className="search-icon" aria-hidden="true" />
            <input type="search" placeholder="Search files..." aria-label="Search files" />
            <button className="search-button glass-hover" type="submit" aria-label="Search" />
          </form>

          <button className="tag-chip glass-hover" type="button">
            <span className="check-mark" aria-hidden="true" />
            <span>titch</span>
            <span className="arrow-mark" aria-hidden="true" />
          </button>

          <div className="folder folder-pink glass-hover" aria-label="Purple glass folder">
            <div className="folder-tab" />
            <div className="folder-front" />
          </div>

          <div className="folder folder-mint glass-hover" aria-label="Mint glass folder">
            <div className="folder-tab" />
            <div className="folder-front" />
          </div>
        </div>
      </section>
    </main>
  );
}
