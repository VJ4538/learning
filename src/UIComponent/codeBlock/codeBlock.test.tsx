import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CodeBlock from "./CodeBlock";

describe("Test Button Component", () => {
  it("CodeBlock renders properly", async () => {
    render(<CodeBlock codeBlock={`const testing ='Testing code render`} />);

    expect(screen.getByTestId("code-block")).toBeDefined();
    expect(screen.getByText("Testing")).toBeDefined();
  });
});
