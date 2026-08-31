import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <p className="not-found__label">ERROR // 404</p>

        <h1>LOST IN THE BUILD.</h1>

        <p>
          This page doesn't exist — or it got deleted somewhere between
          development and production.
        </p>

        <Link to="/" className="not-found__button">
          BACK TO HOME
        </Link>
      </div>

      <div className="not-found__number" aria-hidden="true">
        404
      </div>
    </section>
  );
}