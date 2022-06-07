import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaUsers } from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { AiFillProfile } from 'react-icons/ai'
import { UsersRender } from './admin_render/UsersRender'
import { JobsRender } from './admin_render/JobsRender'
import { fetchAllJobs } from '../../redux/jobs/allJobs'
import { fetchUsers } from '../../redux/users/users'
import { FaBuilding } from 'react-icons/fa'
import { RiBuildingFill } from 'react-icons/ri'

import styles from './admin.module.css'
import { fetchCompanies } from '../../redux/company/company'
import { CompaniesRender } from './admin_render/CompaniesRender'
import {GiTechnoHeart} from 'react-icons/gi'

export const Admin = () => {


  const [ selectOption, setSelectOption ] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllJobs())
    dispatch(fetchUsers())
    dispatch(fetchCompanies())
  }, [dispatch])

 const {users} = useSelector(state => state.users)
 const {allJobs} = useSelector(state => state.allJobs)
 const {companies} = useSelector(state => state.company)
console.log(users)
if(users[0] === undefined) return <p>Loading...</p>
if(allJobs === undefined) return <p>Loading...</p>
if(companies === undefined) return <p>Loading...</p>



  return (
    <div className={styles.admin_container}>
      <aside className={styles.admin_side_bar}>

        <div className={styles.side_bar_title}>
          <h3>Admin Dashboard</h3>
        </div>

        <ul className={styles.side_bar_menu}>
          <li className={styles.side_bar_item}
              onClick={ () => setSelectOption("users") }
          >
            <FaUsers />
            <span>Users</span>
          </li>

          <li className={styles.side_bar_item}
              onClick={ () => setSelectOption("companies") }
          >
            <FaBuilding />
            <span>Companies</span>
          </li>

          <li className={styles.side_bar_item}
            onClick={() => setSelectOption("jobs")}
          >
            <MdWork/>
            <span>Jobs Offers</span>  
          </li>

          <li className={styles.side_bar_item}
              onClick={ () => setSelectOption("technologies") }
          >
            <GiTechnoHeart />
            <span>Technologies</span>
          </li>

        </ul>
        
      </aside>

      <main className={styles.admin_dashboard}>
        <div className={styles.dashboard_statistics}>

            <div className={styles.statistics_box}>
                <FaUserAlt className={styles.statistics_box_icon}/>
                <div className={styles.statistics_box_info}>
                  <h4>Users:</h4>
                  <span>{users[0]?.offers === undefined ? <p>Loading...</p> : (users.length-1)*10+users[users.length-1].offers.length}</span>
                </div>
            </div>

            <div className={styles.statistics_box}>
                <RiBuildingFill className={styles.statistics_box_icon}/>
                <div className={styles.statistics_box_info}>
                  <h4>Companies:</h4>
                  <span>{companies === undefined ? <p>Loading...</p> : companies.length}</span>
                </div>
            </div>

            <div className={styles.statistics_box}>
                <AiFillProfile className={styles.statistics_box_icon}/>
                <div className={styles.statistics_box_info}>
                  <h4>Job Offers:</h4>
                  <span>{allJobs[0]?.offers === undefined ? <p>Loading...</p> : (allJobs.length-1)*10+allJobs[allJobs.length-1].offers.length}</span>
                </div>
            </div>

          </div>
          {<div className={styles.table_section}>
            {
              selectOption === "users" && <UsersRender />
            }
            {
              selectOption === "jobs" && <JobsRender />
            }
            {
              selectOption === "companies" && <CompaniesRender />
            }
            {
              selectOption === "technologies" && <CompaniesRender />
            }
          </div>}
      </main>
    </div>
  )
}
