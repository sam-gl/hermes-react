import React, { ReactElement, useState } from "react";
import styles from "./styles.module.css";
import Subscribe from "./Subscribe";
import GoToInbox from "./GoToInbox";
import Error from "./Error";

const Hermes = (props: HermesInterface): ReactElement => {
  const [status, setStatus] = useState<statuses>("unfilled");
  const [email, setEmail] = useState<string>("");

  const renderStage = (status: statuses) => {
    switch (status) {
      case "unfilled":
      case "loading":
        return (
          <Subscribe
            email={email}
            setEmail={setEmail}
            setStatus={setStatus}
            {...props}
          />
        );

      case "finished":
        return <GoToInbox email={email} />;

      case "error":
        return <Error />;
    }
  };

  return <div className={styles.hermes}>{renderStage(status)}</div>;
};

export default Hermes;
