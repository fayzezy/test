import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
       <h1>oxstaking</h1>
       <web3Button>claim H</web3Button>
    </main>
  );
};

export default Home;
