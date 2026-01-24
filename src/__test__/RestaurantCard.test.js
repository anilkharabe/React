import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from './MOCK_DATA.json'

it('should render RestaurantCard component with Prop Data', ()=>{
    render ( <RestaurantCard resObj={MOCK_DATA}/> )

    const name = screen.getByText('Kerala Cafe')
    expect(name).toBeInTheDocument()
})
