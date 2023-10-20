import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceResource } from '../../types';

interface State {
  service: number;
  servicePrefix: string;
  serviceName: string;
  services: ServiceResource[];
  servicesSelected: ServiceResource[];
}

const mockedInitialState: ServiceResource[] = [
  { id: 1, prefix: 's1', name: 'service one', status: { value: 'UNKNOWN' } },
  { id: 2, prefix: 's2', name: 'service two', status: { value: 'UNKNOWN' } },
  { id: 3, prefix: 's3', name: 'service three', status: { value: 'UNKNOWN' } },
  { id: 4, prefix: 's4', name: 'service four', status: { value: 'NOTAPPROVED' } },
  { id: 5, prefix: 's5', name: 'service five', status: { value: 'UNKNOWN' } },
  { id: 6, prefix: 's6', name: 'service six', status: { value: 'APPROVED' } },
  { id: 7, prefix: 's7', name: 'service seven', status: { value: 'UNKNOWN' } },
];

const state: State = {
  service: 0,
  servicePrefix: '',
  serviceName: '',
  services: mockedInitialState,
  servicesSelected: [],
};

const listServicesSlice = createSlice({
  name: 'listServices',
  initialState: state,
  reducers: {
    setServices: (state: State, action: PayloadAction<any>) => {
      state.services = action.payload;
    },
    setServiceSelected: (state: State, action: PayloadAction<any>) => {
      state.servicesSelected = action.payload;
    },
  },
});

export const { setServices, setServiceSelected } = listServicesSlice.actions;
export default listServicesSlice.reducer;
