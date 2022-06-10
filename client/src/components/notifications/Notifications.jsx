import { useEffect } from 'react'
import { NotificationDevCard } from './notification_dev_card/NotificationDevCard'
import { NotificationComCard } from './notification_com_card/NotificationComCard'
import { fetchNotifications } from '../../redux/notifications/notifications'
import { AiFillNotification } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'

import styles from './notifications.module.css'


export const Notifications = () => {

  const {notifications} = useSelector( state => state.notifications)

  const dispatch = useDispatch()

  const userLocalStorage = JSON.parse(localStorage.getItem("userData"))

  const { fullName, name, profileType } = userLocalStorage

  useEffect(() => {
    dispatch(fetchNotifications())
  },[dispatch])

  console.log(notifications)

  return (
    <div className={styles.notifications}>
      <h2>Hi, {fullName ? fullName : name}</h2>
      <div className={styles.notifications_container}>
        <div className={styles.notifications_container_title}>
          <h4>Your Notifications</h4>
          <AiFillNotification />
        </div>
        {
          profileType[0] === "develop" && (
            <div>
              {/* { !notifications ? <p>loading</p> :
              notifications.map(n => (
                <NotificationDevCard 
                {...n}
                />
              ))} */}
              
              <NotificationDevCard />
            </div>
          )
        }

        {
          profileType[0] === "company" && (
            <div>
              <NotificationComCard/>
            </div>
          )
        }
        

      </div>
    </div>
  )
}
