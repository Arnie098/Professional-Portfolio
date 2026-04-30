import "./Css/qoute.css";

export default function QuoteCard() {
  const text = "I never let schooling interfere with my education.";
  const author = "Mark Twain";

  return (
    <figure className="card" aria-label="quote card">
      <blockquote className="quote">"{text}"</blockquote>
      <figcaption className="caption">- {author}</figcaption>
      <div className="hiddenCaption">
        <p className="mb-0">
          I believe meaningful growth comes from disciplined self-learning,
          curiosity, and applying knowledge beyond the classroom.
        </p>
      </div>
    </figure>
  );
}
