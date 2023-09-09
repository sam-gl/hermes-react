import React, {
  ChangeEvent,
  ReactElement,
  SyntheticEvent,
  useState,
} from "react";
import Loading from "./Loading";
import styles from "./styles.module.css";

const Subscribe = (props: SubscribeInterface) => {
  const [status, setStatus] = useState<statuses>("unfilled");
  const { title, subtitle, endpoint, email, setEmail } = props;

  const submitForm = async (event: SyntheticEvent) => {
    setStatus("loading");
    event.preventDefault();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const parsedResponse = await response.json();
      setStatus("finished");
      console.log(parsedResponse);
      return parsedResponse;
    } catch (error: any) {
      setStatus("error");
      console.error(error);
    }
  };

  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <>
      <div className={styles.hermesTitle}>{title}</div>
      <div className={styles.hermesSubtitle}>{subtitle}</div>
      <form className={styles.hermesForm} onSubmit={submitForm}>
        <input
          className={styles.hermesInput}
          type="email"
          placeholder="youremail@example.com"
          onChange={handleForm}
          value={email}
        />
        <button className={styles.hermesButton}>
          {status == "unfilled" && "Join"}
          {status == "loading" && <Loading />}
        </button>
      </form>
    </>
  );
};

export default Subscribe;
