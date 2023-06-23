
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/button";

export const metadata = {
  title: "Hemkov Dev Contact Information",
  description: "This is description",
};


const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let&apos;s keep in touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={"/contact.png"} alt="" fill={true} className={styles.image} />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea placeholder="message" className={styles.textarea} cols="30" rows="10"></textarea>
          <Button url={"#"} text={"Send"} />
        </div>
      </div>

    </div>
  )
}

export default Contact