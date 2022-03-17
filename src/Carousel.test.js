import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it('should render component successfuly', () => {
   render(<Carousel />);
});

it('should match snapshot', () => {
   const {asFragment} = render(<Carousel />);
   expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
   const { queryByTestId, queryByAltText } = render(<Carousel />);

   // move forward on the carousel
   const rightArrow = queryByTestId("right-arrow");
   fireEvent.click(rightArrow);

   // move backward on the carousel
   const leftArrow = queryByTestId("left-arrow");
   fireEvent.click(leftArrow);

   // expect the first image to show, but not the second
   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
   expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
});

it("left arrow should be hidden when on the first image", function() {
   const { queryByTestId, queryByAltText } = render(<Carousel />);

   const leftArrow = queryByTestId("left-arrow");
   // expect left arrow to be hidden when on the first image
   expect(leftArrow).toHaveClass("hidden");

});

it("right arrow should be hidden when on the last image", function() {
   const { queryByTestId, queryByAltText} = render(<Carousel />);

   const rightArrow = queryByTestId("right-arrow");
   fireEvent.click(rightArrow);
   fireEvent.click(rightArrow);

   // expect right arrow to be hidden when on the last image
   expect(rightArrow).toHaveClass("hidden");
})

