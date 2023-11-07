import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleResource, Role } from '../../types';

interface State {
    roles: Role[];
    checkedAll: boolean;
    rolesSelected: RoleResource[];
}

const emptyState: State = {
    checkedAll: false,
    roles: [],
    rolesSelected: []
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
        ],
    rolesSelected: [],
}

const listRolesslice = createSlice({
    name: 'listRoles',
    initialState: state,
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
            state.roles = action.payload.map((role) =>{
            return { role: role, isChecked: false}
            });
            state.checkedAll = false;
        },
        setRolesSelected: (state: State, action: PayloadAction<any>) => {
            state.rolesSelected = action.payload;
          },
    },
});
            // Actions
    
    
export const { checkRole, checkAllRoles, setRoles, setRolesSelected } = listRolesslice.actions;
export default listRolesslice.reducer;