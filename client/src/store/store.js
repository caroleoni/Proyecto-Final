import { configureStore } from '@reduxjs/toolkit'
import conditionalRegisterSlice from '../redux/conditional_register/conditionalRegisterSlice'
import  modalSlice  from '../redux/modal_slice/modalSlice'
import companySlice  from '../redux/company/company'
import usersSlice  from '../redux/users/users'
import jobsSlice  from '../redux/jobs/jobs'
import techsSlice  from '../redux/techs/techs'
import jobDetailSlice  from '../redux/jobs/jobDetail'
import authSlice from '../redux/auth/authSlice'
import CompanyPSlice from '../redux/Profile/profileData'

//Admin Slices

import adminUsersSlice from '../redux/admin/adminUsersSlice'
import adminCompanySlice from '../redux/admin/adminCompanySlice'
import adminOtherSlice from '../redux/admin/adminOtherSlice'
import adminJobSlice from '../redux/admin/adminJobSlice'


export const store = configureStore({
    reducer:{
        auth: authSlice,
        modal: modalSlice,
        conditionalReg: conditionalRegisterSlice,
        users:usersSlice,
        company:companySlice,
        companyProfile: CompanyPSlice,
        techs:techsSlice,
        jobDetail: jobDetailSlice,
        jobs:jobsSlice,
      

        //admin Slices
        adminUsers: adminUsersSlice,
        adminCompany: adminCompanySlice,
        adminJob:adminJobSlice,
        adminOther:adminOtherSlice
    }
})

