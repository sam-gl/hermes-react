import React from "react";
import styles from "./styles.module.css";

const GoToInbox = (props: { email: string }) => {
  const { email } = props;
  return <p>Go to your inbox ey {email}</p>;
};

export default GoToInbox;
