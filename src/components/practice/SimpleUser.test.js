import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleUser from "./SimpleUser.js";

describe("SimpleUser component", () => {
  it("should render Simple User component correctly with auth context", () => {
    render(<SimpleUser />);
    const nameSpan = screen.getByTestId('name');
    expect(nameSpan).not.toBeNull();
  });
});
