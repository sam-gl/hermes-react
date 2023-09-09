declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface HermesInterface {
  title: string;
  subtitle: string;
  endpoint: string;
}

type statuses = "unfilled" | "loading" | "finished" | "error";

interface SubscribeInterface extends HermesInterface {
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  setStatus: React.Dispatch<React.SetStateAction<statuses>>;
}
