import { h } from 'preact';
import Styles from './styles.module.scss';

import { postsDB } from '../../stores/postsDB.js';

function urlSrc(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

function imgSrc(id) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

const Video = ({
  id,
  tags,
  title,
  description,
  authorSrc,
  author,
  duration,
}) => {
  return (
    <a
      className="post-card"
      href={urlSrc(id)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <header className="post-card-header">
        <img
          className="post-card-image lazyloaded"
          src={imgSrc(id)}
          alt={title}
          data-src={imgSrc(id)}
          width="1600"
          height="1050"
        />
        <div className="post-card-tags">{tags}</div>
        <h2 className="post-card-title">{title}</h2>
      </header>
      <div className="post-card-excerpt">
        <p>{description}</p>
      </div>
      <footer className="post-card-footer">
        <div className="post-card-footer-left">
          <div className="post-card-avatar">
            <img
              className="author-profile-image ls-is-cached lazyloaded"
              src={authorSrc}
              alt={author}
              data-src={authorSrc}
              width="400"
              height="400"
            />
          </div>
          <span>{author}</span>
        </div>
        <div className="post-card-footer-right">
          <div>{duration}</div>
        </div>
      </footer>
    </a>
  );
};

const Videos = () => {
  return (
    <>
      <section className="post-feed">
        {postsDB.map((item) => (
          <Video {...item} />
        ))}
      </section>
    </>
  );
};

export default Videos;
