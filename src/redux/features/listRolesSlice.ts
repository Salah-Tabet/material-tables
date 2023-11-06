import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleResource, Role } from '../../types';

interface State {
    roles: Role[l;
    checkedAll: boolean;
}

const emptyState: State = {
checkedAll: false,
roles: []
}

const state: State = {
checkedAll: false,
roles: [
    {
    role:{
        id: 0,
        name: 'priv_fagsi_dev_d',
        sdlc: "DEV",
        description: '',
        },
       isChecked: false
    },
    {
    role: {
        id: 1,
        name: "priv_fags)_dev_q",
        sdlc: 'QA',
        description: "",
        },
        isChecked: false
    }
]
}

const listRolesslice = createslice({
    name: 'listRoles',
    initialState: emptyState,
    reducers: {
    
        checkRole: (state: State, action: PayloadAction<number>) =>{
            state.roles = state. roles.map((roleWrapper:any) => {
            return roleWrapper.role.id !== action.payload ? { ... roleWrapper} : {role: {...roleWrapper.role}, isChecked: !roleWrapper.isChecked}
            });
            if(state.checkedAll) {
            state.checkedAll= false;
            }
        },
        
        checkAllRoles: (state: State, action: PayloadAction) => {
            state.checkedAll = !state.checkedAll;
            state.roles = state.roles.map(({role} : any) => {
            return {role: {...role}, isChecked: state.checkedAll}
            });
        },
        setRoles: (state: State, action: PayloadAction<RoleResource[]>) =>{
            state.roles = action.payload.map((role: any) =>{
            return { roles: role, sChecked: false}
            });
            state.checkedAll = false;
        },
    },
});
            // Actions
    
    
export const { checkRole, checkAllRoles, setRoles } = listRolesslice.actions;
export default listRolesslice.reducer;