import { render, screen } from "@testing-library/react";
import { describe, it } from "node:test";
import { Login } from "./login";
import "@testing-library/jest-dom";

describe("it should render a login form", () => {
  it("it should render", () => {
    render(<Login />);

    const element = screen.getByRole("form");
  });
});
