import React from "react";

export const ResumeButton = () => {
  return (
    <>
      <button className="resume-button glass-hover" type="button">
        Secondary
      </button>

      <style>{`
        .resume-button {
          position: relative;
          isolation: isolate;
          min-width: clamp(140px, 22vw, 200px);
          min-height: clamp(54px, 8vw, 76px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 50px;
          padding: 14px 40px;
          overflow: hidden;
          color: var(--kombu-green);
          background:
            linear-gradient(
              135deg,
              color-mix(in srgb, var(--bone) 58%, var(--moss-green)),
              color-mix(in srgb, var(--moss-green) 70%, var(--bone))
            );
          box-shadow:
            0 12px 12px color-mix(in srgb, var(--moss-green) 28%, transparent),
            0 20px 28px color-mix(in srgb, var(--kombu-green) 14%, transparent),
            inset 0 1px 1px color-mix(in srgb, var(--bone) 72%, transparent),
            inset 0 -7px 10px color-mix(in srgb, var(--kombu-green) 16%, transparent);
          cursor: pointer;
          font: inherit;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: 0;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            filter 180ms ease;
        }

        .resume-button::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background:
            radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--bone) 62%, transparent), transparent 42%),
            radial-gradient(circle at 84% 82%, color-mix(in srgb, var(--moss-green) 34%, transparent), transparent 50%);
          opacity: 0.9;
          backdrop-filter: blur(18px) saturate(1.18);
          -webkit-backdrop-filter: blur(18px) saturate(1.18);
        }

        .resume-button:hover {
          transform: scale(1.03);
          box-shadow:
            0 16px 18px color-mix(in srgb, var(--moss-green) 42%, transparent),
            0 25px 36px color-mix(in srgb, var(--kombu-green) 22%, transparent),
            inset 0 1px 1px color-mix(in srgb, var(--bone) 78%, transparent),
            inset 0 -7px 10px color-mix(in srgb, var(--kombu-green) 20%, transparent);
          filter: brightness(1.02);
        }

        .resume-button:focus-visible {
          outline: 3px solid color-mix(in srgb, var(--kombu-green) 28%, transparent);
          outline-offset: 4px;
        }

        .resume-button:active {
          transform: scale(0.99);
        }
      `}</style>
    </>
  );
};
