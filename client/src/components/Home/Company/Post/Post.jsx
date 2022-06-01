import React from 'react'
import styles from "./Post.module.css"
import { Link } from 'react-router-dom';
function Post({id,profile_pic,fullName,description,email,technologies}) {
  return (
    <Link to={`/company/post/${id}`}>
    <div className={styles.postCard}>
      <div className={styles.imgContainer}>
      <img src={profile_pic} alt="profile user"/>
      </div>
      <div className={styles.detailsContainer}>
        <p>{fullName}</p>
        <p>{description}</p>
        <div  className={styles.techsContainer}>
          {technologies.map((t,i)=>
            <label
              key={i}
            >{t.name}</label>)}
        </div>
      </div>
    </div>
   </Link>
  )
}

export default Post