import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import RES_MOCK_DATA from "./RES_MOCK_DATA.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        restaurants: RES_MOCK_DATA,
      }),
  })
);

it("Should render the body component with search", async () => {
//   render(<Body />);

//   const searchBtn = await screen.findByRole("button", {
//     name: 'Search',
//   });

//   expect(searchBtn).toBeInTheDocument();
});
