import { Autocomplete, Box, Button, createTheme, Stack, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetServicesQuery } from '../redux/features/api/creamSlice';
import { setServices, setServiceSelected } from '../redux/features/listServiceSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ServiceResource } from '../types';


  
const theme = createTheme();

const Serviceselector: React.FC<any> = ({ maxSelection = 5, buttonText = "Next" }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const listServices = useAppSelector((state) => state.listServicesSlice.services);
    const listServicesSelected = useAppSelector((state) => state.listServicesSlice.servicesSelected);
  
    const [limitReachedText, setLimitReachedText] = useState(false);
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
  
    const handleSelectedServiceChange = (event: any, value: ServiceResource[]) => {
     if(value.length <= maxSelection) {
        dispatch(setServiceSelected(value));
        setLimitReachedText(false);
     }
      if (value.length >= maxSelection) {
        setLimitReachedText(true);
      }
    };
  
    const handleNext = (event: any) => {
      event.preventDefault();
      console.log('==>>>>', event);
  
      const selectedIds = listServicesSelected.map((service: any) => service.id);
  
      const params = new URLSearchParams();
      params.set('service-ids', selectedIds.join(','));
  
      navigate(`/pcr-editor/create?${params.toString().replace(/%2C/g, ',')}`);
    };
  
    const getOptionLabel = (option:any) => `${option.name} - ${option.prefix}`;
  
    const renderOption = (props: any, option: any) => (
      // <div {...props} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
      //   <span>{getOptionLabel(option)}</span>
      //   <span style={{ fontWeight: 'bold' }}>{option.status.value}</span>
        
      // </div>
      <li {...props} data-testid="option" style={{ display: 'flex', justifyContent: 'space-between', padding: '8px' }}>
      <span data-testid={option.name}>{getOptionLabel(option)}</span>
      <span style={{ fontWeight: 'bold' }}>{option.status.value}</span>
    </li>
    );
  
    return (
      <>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <form onSubmit={handleNext} style={{ width: '50%' }}>
            <Stack direction="row" spacing={2}>
              <ThemeProvider theme={theme}>
              <Autocomplete
                multiple
                //disableCloseOnSelect
                forcePopupIcon={false}
                id="services"
                open={listServicesSelected?.length < maxSelection && inputClicked}
                //size="small"
                options={listServices}
                getOptionLabel={getOptionLabel}
                isOptionEqualToValue={(option:any, value:any) => option.name === value.name}
                //value={selectedServices}
                onChange={handleSelectedServiceChange}
                getOptionDisabled={(options) => (listServicesSelected?.length === maxSelection ? true : false)}
                limitTags={maxSelection}
                getLimitTagsText={() => `You have reached the limit of 5 services`}
                renderOption={renderOption}
                defaultValue={[]}
                onBlur={() =>setInputClicked(false)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Services"
                    placeholder={listServicesSelected?.length < maxSelection ? 'Select up to 5 Services' : ''}
                    onClick={() => setInputClicked(true)}
                    data-testid={params.id.toString()}
                    
                  />
                )}
               
                data-testid="autocomplete"
                style={{ width: '100%' }}
              />
              </ThemeProvider>
              <Button disabled={listServicesSelected?.length < 1} type="submit" variant="contained" color="primary" data-testid="buttonNext">
               {buttonText}
              </Button>
            </Stack>
            {limitReachedText && <p data-testid="limitText">You have reached the limit of 5 services</p>}
          </form>
        </Box>
      </>
    );
  };
  
  export default Serviceselector;


