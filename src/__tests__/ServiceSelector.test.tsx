import React from "react";
import { Provider } from "react-redux";
import { act, findByPlaceholderText, fireEvent, getByTestId, render, screen, within, getByLabelText, getByText, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";
import ServiceSelector from "../components/ServiceSelector";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";
import { Autocomplete, TextField, Button, Stack, Grid, Box, createTheme, ThemeProvider } from "@mui/material";
import { truncateSync } from "fs";

let mockedStore: any;
jest.setTimeout(15000); // 15 seconds
describe("Service Selector UI Component testing:", () => {
  beforeAll(() => {
    const mockStore = configureStore([]);
    const initialState = {
        listServicesSlice: {
            service: 0,
            ServicePrefix: '',
            serviceName: '',
            services: [
        { id: 1, prefix: "s1", name: "service one", status: { value: "UNKNOWN" } },
        { id: 2, prefix: "s2", name: "service two", status: { value: "APPROVED" } },
        { id: 3, prefix: "s3", name: "service three", status: { value: "UNKNOWN" } },
        { id: 4, prefix: "s4", name: "service four", status: { value: "NOTAPPROVED" } },
        { id: 5, prefix: "s5", name: "service five", status: { value: "UNKNOWN" } },
        { id: 6, prefix: "s6", name: "service six", status: { value: "APPROVED" } },
        { id: 7, prefix: "s7", name: "service seven", status: { value: "UNKNOWN" } },
      ],
      servicesSelected: [{ id: 1, prefix: "s1", name: "service one - s1", status: { value: "UNKNOWN" } },
      { id: 2, prefix: "s2", name: "service two", status: { value: "APPROVED" } },
      { id: 3, prefix: "s3", name: "service three", status: { value: "UNKNOWN" } },
      { id: 4, prefix: "s4", name: "service four", status: { value: "NOTAPPROVED" } },],
    },
    };
    mockedStore = mockStore(initialState);
  });

 test.skip("should show a message when the select limit is reached and should remove the tags on close/remve icon", async () => {
    const {container, getByTestId, getByLabelText, getByText, getByRole, queryByText, queryByTestId, findAllByTestId} = render(
    <Provider store={mockedStore}>
        <MemoryRouter>
            <ServiceSelector />
        </MemoryRouter>
    </Provider>) 
    const autocomplete = getByTestId('autocomplete');
    
    const serviceInputElement: HTMLInputElement = within(autocomplete).getByLabelText("Select Services") as HTMLInputElement;
    const tags = screen.getByLabelText("Select Services");
    const serviceList = within(autocomplete).getByRole('combobox') as HTMLInputElement;
    const inputcontrol = getByTestId("services") as HTMLInputElement;
    const maxLimit = 5;
    const options = ['service one - s1', 'service two - s2', 'service three - s3', 'service four - s4', 'service five - s5'];
    const maxLimitReachedText = 'You have reached the limit of 5 services';
    const input = screen.getByLabelText('Select Services');
    // await waitFor(() => {
    // await act(async () => {
    //     serviceList.focus();
    //     userEvent.click(inputcontrol)
    //     userEvent.type(inputcontrol, "service one - s1");
    //     userEvent.click(getByText("service one - s1"))
    // });

    // await act(async () => {
    //     userEvent.click(inputcontrol)
    //     userEvent.type(inputcontrol, "service two - s2");
    //     userEvent.click(getByText("service two - s2"))
    // });

    // await act(async () => {
    //     userEvent.click(inputcontrol)
    //     userEvent.type(inputcontrol, "service three - s3");
    //     userEvent.click(getByText("service three - s3"))
    // });

    // await act(async () => {
    //     userEvent.click(inputcontrol)
    //     userEvent.type(inputcontrol, "service four - s4");
    //     userEvent.click(getByText("service four - s4"))
    // });

    // await act(async () => {
    //     userEvent.click(inputcontrol)
    //     userEvent.type(inputcontrol, "service five - s5");
    //     userEvent.click(getByText("service five - s5"))
    // });
    for (const optionText of options) {
      await act(async () => {
          userEvent.click(inputcontrol);
          userEvent.type(inputcontrol, optionText);
          userEvent.click(getByTestId(optionText.split(" - ")[0]));  
          console.log("---->", optionText);
      });
    }
   
    //  }, { timeout: 5000 });


    await waitFor(() => {
      expect(getByTestId('limitText')).toBeInTheDocument();
    });

    });

    test.skip("should remove the item from the input", async () => {
        const {container, getByTestId, getByLabelText, getByText, getByRole, queryByText, queryByTestId, findAllByTestId} = render(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <ServiceSelector />
                </MemoryRouter>
            </Provider>) 
        const autocomplete = getByTestId('autocomplete');
        const serviceList = within(autocomplete).getByRole('combobox') as HTMLInputElement;
        const inputControl = getByTestId("services") as HTMLInputElement;
        await act(async () => {
            serviceList.focus();
            userEvent.click(inputControl);
            userEvent.type(inputControl, "service one - s1");
            userEvent.click(getByText("service one - s1"));
          });
        
          // Find and click the close/remove icon
          const cancelIcon = within(container).getByTestId("CancelIcon"); // Locate within the rendered container
          await act(async () => {
            userEvent.click(cancelIcon); // Click the cancel icon to remove the item
          });
          
          console.log(container.innerHTML); // Log the HTML to see if the item is still present
          
          await act(async () => {
            userEvent.click(cancelIcon); // Click the cancel icon to remove the item
            await waitForElementToBeRemoved(() => queryByText("service one - s1"));
          });
            
    });

    
});