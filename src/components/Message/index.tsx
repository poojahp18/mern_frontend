import styles from "./Message.module.scss";

type Props = {
  text: string;
};

const Message = ({ text }: Props) => {
  return (
    <div className={styles.messagebox}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
