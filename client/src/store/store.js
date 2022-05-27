import { configureStore } from '@reduxjs/toolkit'
import conditionalRegisterSlice from '../redux/conditional_register/conditionalRegisterSlice'
import  modalSlice  from '../redux/modal_slice/modalSlice'
import companySlice  from '../redux/company/company'
import usersSlice  from '../redux/users/users'
import jobsSlice  from '../redux/jobs/jobs'
import techsSlice  from '../redux/techs/techs'

export const store = configureStore({
    reducer:{
       modal: modalSlice,
       conditionalReg: conditionalRegisterSlice,
       users:usersSlice,
        company:companySlice,
        jobs:jobsSlice,
        techs:techsSlice
    }
})

