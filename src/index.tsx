import React, { ChangeEvent, ReactElement, SyntheticEvent, useState } from "react";
import styles from "./styles.module.css";

interface HermesInterface {
  title: string,
  subtitle: string,
  endpoint: string
};

const Hermes = (props: HermesInterface): ReactElement  => {
  const [ email, setEmail ] = useState('');
  const { title, subtitle, endpoint } = props;

  const submitForm = async (event: SyntheticEvent) => {
    event.preventDefault();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const parsedResponse = await response.json();

    console.log(parsedResponse);
    return parsedResponse;
  }

  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  return (
    <div className={styles.hermes}>
      <div className={styles.hermesTitle}>{title}</div>
      <div className={styles.hermesSubtitle}>{subtitle}</div>
      <form className={styles.hermesForm} onSubmit={submitForm}>
        <input className={styles.hermesInput} type="email" placeholder="youremail@example.com" onChange={handleForm} value={email} />
        <button className={styles.hermesButton}>Join</button>
      </form>
    </div>
  );
}

export default Hermes;
