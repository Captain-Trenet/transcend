import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Transcend. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          className={styles.icon}
          src={"/1.png"}
          width={15}
          height={15}
          alt="social icon"
        />
        <Image
          className={styles.icon}
          src={"/2.png"}
          width={15}
          height={15}
          alt="social icon"
        />
        <Image
          className={styles.icon}
          src={"/3.png"}
          width={15}
          height={15}
          alt="social icon"
        />
        <Image
          className={styles.icon}
          src={"/4.png"}
          width={15}
          height={15}
          alt="social icon"
        />
      </div>
    </div>
  );
};

export default Footer;
