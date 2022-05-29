import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    activeLoginModal: null,
    activeRegisterModal: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,

    reducers:{
        setModalValue( state ){
           state.isOpen = !state.isOpen;
        },
        activateLoginModal(state, {payload}){
            state.activeLoginModal = payload;
        },
        activateRegisterModal(state, {payload}){
            state.activeRegisterModal = payload;
        }
    }
})


export const modalActions = modalSlice.actions;
export default modalSlice.reducer;