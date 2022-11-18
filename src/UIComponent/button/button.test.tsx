/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./component/Button";
import { IoBagRemoveOutline } from "react-icons/io5";

describe("Test Button Component", () => {
  it("Render button in sizes and variants", async () => {
    render(
      <>
        <Button size='small'>Small Text Button</Button>
        <Button variant='outlined' size='medium'>
          Medium Outlined Button
        </Button>
        <Button variant='contained' size='large'>
          Large Contained Button
        </Button>
      </>,
    );

    expect(screen.getByText("Small Text Button")).toHaveClass(
      "button-text small",
    );
    expect(screen.getByText("Medium Outlined Button")).toHaveClass(
      "button-outlined medium",
    );
    expect(screen.getByText("Large Contained Button")).toHaveClass(
      "button-contained large",
    );
  });

  it("Render button with start and end icon", async () => {
    render(
      <>
        <Button variant='outlined' startIcon={<IoBagRemoveOutline />}>
          Start Icon Button
        </Button>
        <Button variant='outlined' endIcon={<IoBagRemoveOutline />}>
          Icon Button
        </Button>
      </>,
    );

    expect(screen.getByText("Start Icon Button")).toContainHTML("svg");
  });

  it("onClick and disable is working", async () => {
    let number = 0;

    const increment = () => number++;

    render(
      <>
        <Button variant='outlined' onClick={increment}>
          onClick
        </Button>
        <Button variant='outlined' onClick={increment} disabled>
          Disabled
        </Button>
      </>,
    );

    userEvent.click(screen.getByText("Disabled"));
    expect(number).toBe(0);

    userEvent.click(screen.getByText("onClick"));
    expect(number).toBe(1);

    userEvent.click(screen.getByText("Disabled"));
    expect(number).toBe(1);

    userEvent.click(screen.getByText("onClick"));
    expect(number).toBe(2);
  });

  it("able to attach classes and href to button", async () => {
    render(
      <>
        <Button variant='outlined' href='https://www.google.com/'>
          Href
        </Button>
        <Button variant='outlined' classes='custom-button'>
          Custom Style
        </Button>
        `
      </>,
    );

    expect(screen.getByRole("link")).toBeDefined();
    expect(screen.getByRole("link")).toHaveClass("button-href");
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.google.com/",
    );
    expect(screen.getByText("Custom Style")).toHaveClass("custom-button");
  });
});
