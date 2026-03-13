export default function Blobs() {
  return (
    <>
      <style>{`
        @keyframes lp-blob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(80px, -60px) scale(1.15); }
          66%       { transform: translate(-40px, 50px) scale(0.9); }
        }
        @keyframes lp-blob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-70px, 50px) scale(1.1); }
          66%       { transform: translate(60px, -70px) scale(1.2); }
        }
        @keyframes lp-blob3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(50px, 80px) scale(0.85); }
          66%       { transform: translate(-80px, -30px) scale(1.1); }
        }
        .lp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
          pointer-events: none;
          will-change: transform;
        }
        .lp-blob-a {
          width: 500px; height: 500px;
          background: #EC008C;
          top: -100px; left: -100px;
          animation: lp-blob1 10s ease-in-out infinite;
        }
        .lp-blob-b {
          width: 420px; height: 420px;
          background: #7B0050;
          top: 30%; right: -80px;
          animation: lp-blob2 13s ease-in-out infinite;
        }
        .lp-blob-c {
          width: 360px; height: 360px;
          background: #EC008C;
          bottom: -60px; left: 40%;
          animation: lp-blob3 16s ease-in-out infinite;
        }
      `}</style>
      <div className="lp-blob lp-blob-a" aria-hidden="true" />
      <div className="lp-blob lp-blob-b" aria-hidden="true" />
      <div className="lp-blob lp-blob-c" aria-hidden="true" />
    </>
  );
}
