import React from 'react';
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom'; // Use MemoryRouter for testing routing
import MainPage from '../pages/HomePage'; // Import your component
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

jest.setTimeout(15000);

const history = createMemoryHistory();


describe('MainPage Component', () => {
  it('should render and position cards correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    // Assert that the cards and their text are rendered
    expect(getByText('Create Permission Change Request')).toBeInTheDocument();
    expect(getByText('Review Permission Change Requests')).toBeInTheDocument();
    expect(getByText('Generate Reports')).toBeInTheDocument();

    // Assert that the cards are positioned correctly
    expect(getByText('Create Permission Change Request')).toBeVisible();
    expect(getByText('Review Permission Change Requests')).toBeVisible();
    expect(getByText('Generate Reports')).toBeVisible();
  });
  

  test.only('should navigate to the correct route when a card is clicked', () => {
    render(<BrowserRouter>
        <MainPage />
      </BrowserRouter>);

    const createLink = screen.getByTestId('linkone');
    const reviewLink = screen.getByTestId('linktwo');
    const generateLink = screen.getByTestId('linkthree');
    // Assering that the links to change to a a tag with an href attribute.
    expect(createLink).toHaveAttribute('href', '/create');
    expect(reviewLink).toHaveAttribute('href', '/review');
    expect(generateLink).toHaveAttribute('href', '/generate');
  

    act(() => {
        userEvent.click(createLink);
    });
    const createPath = window.location.pathname;
    expect(createPath).toBe('/create');

    act(() => {
        userEvent.click(reviewLink);
    });
    const reviewPath = window.location.pathname;
    expect(reviewPath).toBe('/review');
    
    act(() => {
        userEvent.click(generateLink);
    });
    const generatePath = window.location.pathname;
    expect(generatePath).toBe('/generate');
   });

});
