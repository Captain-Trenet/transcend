
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

const Blog = async () => {

  const data = await getData()

  console.log(data[0]);

  return (
    <div className={styles.container}>
      { data && data.map(item => {
      return <Link href={`/blog/${item._id}`} className={styles.item} key={item.id}>
              <div className={styles.imgContainer}>
                <Image src={item.img} alt="" width={400} height={250} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </Link>
      })}
    </div>
  )
}

export default Blog