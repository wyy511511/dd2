import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://dadeuce.vercel.app/" target="_blank">
            D-Deuce
          </a>
          ! Thirdweb Access Page
        </h1>

        <p className={styles.description}>
          If you have a wallet, connect to claim your Access Key{" "}
          <code className={styles.code}>currently on Mumbai testnet</code>, then
          collect the first Default Deck{" "}
          <code className={styles.code}>also on Mumbai</code> to play the deluxe
          version. Or click{" "}
          <a href="https://dadeuce.vercel.app/" target="_blank">
            DaDeuce Link
          </a>{" "}
          to play the demo version, using random celebs from TMDB API.
        </p>

        <div className={styles.connect}>
          <ConnectWallet btnTitle="Connect d' wallet" />
        </div>
        {/* now add in a thirdweb claim nft button for the access card that displays after they connected their wallet.*/}

        <div className={styles.grid}>
          {/* want to use Link bc internal links */}
          <a href="/vote" className={styles.card}>
            <h2>Vote! 😃 &rarr;</h2>
            <p>DaDeuce DeDuece DoDeaux D-Deux D.Duce DiDoose</p>
          </a>
          {/* want to use Link bc internal links */}
          <a href="/play" className={styles.card}>
            <h2>DD OG Default Deck 🎴 &rarr;</h2>
            <p>
              If no deck: &quot;Collect and play with the *OG Web3 DD, free
              forever!*&quot; if OGDD: &quot;Play now with the OG Web3 DD!&quot;
            </p>
          </a>
          {/* want to use Link bc internal links */}
          <a href="/more" className={styles.card}>
            <h2>More Decks ☄️ &rarr;</h2>
            <p>
              Create your own deck, or collect more decks from the marketplace!
              (Coming soon)
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
