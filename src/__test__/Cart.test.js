import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantDetails from "../components/RestaurantDetails";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import Header from '../components/Header'
import Cart from '../components/Cart'

it("Should load Restaurant menu component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <RestaurantDetails />
        <Cart />
      </BrowserRouter>
    </Provider>,
  )

  const accordianHeader = screen.getByText('Recommended (20)')
  fireEvent.click(accordianHeader)

  expect(screen.getAllByTestId('FoodItems').length).toBe(20)
  const addBtns = screen.getAllByRole('button', {name: 'Add +'})
  
  fireEvent.click(addBtns[0]);
  expect(screen.getByText('Cart (1)')).toBeInTheDocument()
  
  fireEvent.click(addBtns[1]);
  expect(screen.getByText('Cart (2)')).toBeInTheDocument()

  expect(screen.getAllByTestId('FoodItems').length).toBe(22)

  fireEvent.click(screen.getByRole('button', {name: "Clear Cart"}))
  expect(screen.getAllByTestId('FoodItems').length).toBe(20)
}
);
