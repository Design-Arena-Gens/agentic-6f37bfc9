import Link from "next/link";

const highlights = [
  {
    title: "Instant Greetings",
    description:
      "Your landing page is ready the moment you open it—no setup, no waiting."
  },
  {
    title: "Design Forward",
    description:
      "Crafted with a sleek dark theme and soft gradients for a polished first impression."
  },
  {
    title: "Deploy Ready",
    description:
      "Optimized for Vercel, so you can ship to production the second you are satisfied."
  }
];

export default function Home() {
  return (
    <main className="page">
      <span className="badge">
        <span role="img" aria-label="sparkles">
          ✨
        </span>
        Always On
      </span>

      <section className="hero">
        <h1>Hi there, welcome aboard.</h1>
        <p>
          This autonomous agent spun up a complete Next.js experience just for
          you. Explore the highlights, see how it works, and deploy instantly.
        </p>
      </section>

      <div className="cta">
        <button type="button">Get Started</button>
        <Link href="https://nextjs.org/docs">View Docs</Link>
      </div>

      <section className="cards">
        {highlights.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        Crafted autonomously with Next.js &mdash; ready for liftoff.
      </footer>
    </main>
  );
}
