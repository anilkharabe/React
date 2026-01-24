import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("These test cases are related to contact page", () => {

//   beforeAll(()=>{
//     console.log('before all');
//   })

//   beforeEach(()=>{
//     console.log('before each')
//   })

//   afterEach(()=>{
//     console.log('after each')
//   })

//   afterAll(()=>{
//     console.log('after all')
//   })

  it("should load the contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    // const button = screen.getByRole('button')
    const button = screen.getByText("Submit");

    // assertion
    expect(button).toBeInTheDocument();
  });

  it("should load name input box inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Enter your name");

    // assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input box on the contact component", () => {
    render(<Contact />);
    const inputbox = screen.getAllByRole("textbox");

    // assertion
    expect(inputbox.length).toBe(2);
  });
});
