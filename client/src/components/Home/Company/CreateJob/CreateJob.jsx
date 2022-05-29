import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../../../hooks/useForm'
import { MdClose } from 'react-icons/md'
import styles from './createJob.module.css'
import axios from 'axios'


let techId = 0

export default function CreateJob() {


  const [formValues, handleInputChange] = useForm({
    position: '', 
    description: '',
    requirements: '',
  })


  const [seniority, setSeniority] = useState("");
  const [time, setTime] = useState("");
  const [english_level, setEnglish_level] = useState("");
  const [salary_range, setSalary_range] = useState("");
  const [addedTechs, setAddedTechs] = useState([])

  const { position, description,  requirements } = formValues

  const techs = useSelector((state) => state.techs.techs);

  const handleSeniorF = (e) => {
    setSeniority(e.target.value);
  };

  const handleTimeF = (e) => {
    setTime(e.target.value);
  };

  const handleELevelF = (e) => {
    setEnglish_level(e.target.value);
  };

  const handleSalaryF = (e) => {
    setSalary_range(e.target.value);
  };

  const addTechs = (e) => {
    const techObj = {
      tech: e.target.value,
      id:techId++
    }
    setAddedTechs(value => [...value, techObj])
  };

  const handleDelete = (id) =>{
    const deletedTechs = addedTechs.filter(tech => tech.id !== id)
    setAddedTechs(deletedTechs)
  }

  const postNewJob = async () => {
    try {
          const res = await axios.post('http://localhost:3001/jobs/1', {
            position,
            description,
            time,
            salary_range,
            english_level,
            requirements,
            seniority,
            technologies: addedTechs.map(tech => tech.tech)
        })
        console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    postNewJob()
  }


  return (
    <div className={styles.form_container}>
      <div className={styles.form_title}>
        <h2>Create a new job offer</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.create_job_form}>
          <div className={styles.form_left_column}>
              <label>Position</label>
              <input type="text" name="position" value={position} onChange={handleInputChange}/>

              <select className={styles.form_select} onChange={handleSeniorF}>
              
              <option value="" default>Seniority</option>
                <option value="Not Specified">Not Specified</option>
                <option value="Senior">Senior</option>
                <option value="Semi-Senior">Semi-Senior</option>
                <option value="Junior">Junior</option>
              </select>
            

          <select className={styles.form_select} onChange={handleTimeF}>
              <option value="" default>Time</option>
                <option value="Not Specified">Not Specified</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
              </select>
          
          
              <select className={styles.form_select} onChange={handleELevelF}>
              <option value="" default>English Level</option>
                <option value="Not required">Not required</option>
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Advanced or Native">Advanced or Native</option>
              </select>
          

          
              <select className={styles.form_select}  onChange={handleSalaryF}>
              <option value="" default>Salary</option>
                <option value="Not Specified">Not Specified</option>
                <option value="0$ - 1000$">0$ - 1000$</option>
                <option value="1000$ - 3000$">1000$ - 3000$</option>
                <option value="3000$ - 6000$">3000$ - 6000$</option>
                <option value="6000$ - 10000$">6000$ - 10000$</option>
                <option value="+10000$">+ 10000$</option>
              </select>

              <select className={styles.form_select} onChange={addTechs}>
                <option value="" default>Technologies</option>
                {techs.map((e) => (
                <option key={e.id} value={e.name}>{e.name}</option>
                  ))}
              </select>
              
              <div className={styles.added_techs}>
                {
                  addedTechs.map((e, i) => (
                    <div key={i}>
                      <p>{e.tech}</p>
                      <MdClose onClick={() => handleDelete(e.id)}/>
                    </div>
                  ))
                }
              </div>
              

            </div>
            <div className={styles.form_right_column}>
                <label>Requirements</label>
                <textarea name="requirements" columns="10" rows="3" value={requirements} onChange={handleInputChange}></textarea>
                <label>Description</label>
                <textarea name="description" columns="10" rows="5" value={description} onChange={handleInputChange}></textarea>
            </div>
        </div>
          <div className={styles.form_button}>
            <button type='submit' >Send</button>
          </div>
      </form>
    </div>
  )
}