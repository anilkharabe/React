import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";

it("Should load header component with a login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

it("Should load header component with a cart items", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const cartItems = screen.getByText("Cart (0)");
  const cartWithRegex = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
  expect(cartWithRegex).toBeInTheDocument();
});


it("Should change the value of flip coin button after clicked", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const flipCoin = screen.getByRole('button', {name: 'Flip -1'});

  fireEvent.click(flipCoin)
  
  const flipCoinAfterFire = screen.getByRole('button', {name: 'Flip -0'});

  expect(flipCoinAfterFire).toBeInTheDocument();
});
