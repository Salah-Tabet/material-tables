import { Autocomplete, Box, Button, createTheme, Stack, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetRolesQuery } from '../redux/features/api/creamSlice';
import { setRoles, setRolesSelected, checkRole, checkAllRoles } from '../redux/features/listRolesSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Role, RoleResource } from '../types';


  
const theme = createTheme();

const RolesSelector: React.FC<any> = ({maxSelection=100}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const listRoles: Role[] = useAppSelector((state)=> state.listRoles.roles);
    console.log("===list roles==> ", listRoles);
    const listRolesSelected = useAppSelector((state) => state.listRoles.rolesSelected);
  
    //const [limitReachedText, setLimitReachedText] = useState(false);
    const [inputClicked, setInputClicked] = useState(false);
  
    //const { data: servicesData, isLoading: servicesIsLoading, isSuccess: servicesIsSuccess, isError: servicesIsError, error: servicesError } = useGetServicesQuery();
  
    // if (servicesIsLoading) {
    //   console.log('Loading services...');
    // } else if (servicesIsSuccess) {
    //   console.log('The service data is:', servicesData);
    //   dispatch(setServices(servicesData));
    // } else if (servicesIsError) {
    //   console.log('Error loading services -', JSON.stringify(servicesError));
    // }
  
    const handleSelectedServiceChange = (event: any, value: any) => {
      if (value.length > 0) {
        dispatch(setRolesSelected(value));
      }else{
        dispatch(setRolesSelected([]))
      }
    
    };
  
    const handleNext = (event: any) => {
      event.preventDefault();
      console.log('==role selected in generate action :>>>>', listRolesSelected);
  
      const selectedIds = listRolesSelected.map((role: any) => role.id);
  
      const params = new URLSearchParams();
      params.set('role-ids', selectedIds.join(','));
      console.log("======params >>>> ", params.toString());
  
      navigate(`/reports/role-access-reports?${params.toString().replace(/%2C/g, ',')}`);
    };
  
    const getOptionLabel = (option:any) => `${option.role.name}`;
  
    const renderOption = (props: any, option: any) => (
      <li {...props} data-testid="option" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
      <span data-testid={option.role.name}>{getOptionLabel(option)}</span>
      <span style={{ fontWeight: 'bold' }}>{option.role.sdlc}</span>
    </li>
    );
  
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="auto">
          <form onSubmit={handleNext} style={{ width: '65%' }}>
            <Stack direction="row" spacing={2}>
              <ThemeProvider theme={theme}>
              <Autocomplete
                multiple
                //disableCloseOnSelect
                forcePopupIcon={false}
                id="roles"
                open={listRolesSelected?.length < maxSelection && inputClicked}
                //size="small"
                options={listRoles}
                getOptionLabel={getOptionLabel}
                //isOptionEqualToValue={(option:any, value:any) => option.name === value.name}
                //value={selectedServices}
                onChange={handleSelectedServiceChange}
                getOptionDisabled={(options) => (listRolesSelected?.length === maxSelection ? true : false)}
                limitTags={maxSelection}
                getLimitTagsText={() => `You have reached the limit of 5 services`}
                renderOption={renderOption}
                defaultValue={[]}
                onBlur={() =>setInputClicked(false)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Roles"
                    placeholder={listRolesSelected?.length < maxSelection ? 'Select roles' : ''}
                    onClick={() => setInputClicked(true)}
                    data-testid={params.id.toString()}
                    
                  />
                )}
               
                data-testid="autocomplete"
                style={{ width: '100%' }}
              />
              </ThemeProvider>
              <Button disabled={listRolesSelected?.length < 1} type="submit" variant="contained" color="primary" data-testid="buttonNext">
               Generate
              </Button>
            </Stack>
            {/* {limitReachedText && <p data-testid="limitText">You have reached the limit of 5 services</p>} */}
          </form>
        </Box>
      </>
    );
  };
  
  export default RolesSelector;


