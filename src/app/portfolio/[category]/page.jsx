import Button from "@/components/button/button"
import Image from "next/image"
import styles from "./page.module.css"
import {items} from "./data"
import { notFound } from "next/navigation"

const getData = (cat) => {
  const data = items[cat]
  if(data) {
    return data
  } else {
    return notFound()
  }
}

const Category = ({params}) => {
  console.log(params)


  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item => {
        return <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button url={"#"} text={"See more"}  />
        </div>
        <div className={styles.imgContainer}>
          <Image alt="" className={styles.img} fill={true} src={item.image} />
        </div>
      </div>
      })}
    </div>
  )
}

export default Category