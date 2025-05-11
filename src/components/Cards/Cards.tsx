import styles from "./Cards.module.css";

type CardProps = {
  postTitle: string;
  postPreview: string;
  author: string;
};

const Cards = (props: CardProps) => {
  const { postTitle, postPreview, author } = props;
  return (
    <div className={styles.card}>
      <h1>{postTitle}</h1>
      <p>{postPreview}</p>
      <span>~{author}</span>
    </div>
  );
};

export { Cards };
