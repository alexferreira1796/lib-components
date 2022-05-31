import { screen } from "@testing-library/react";

import { renderSnapshotWithTheme, renderWithTheme } from "tests/utils/renderer";

import { Check } from 'assets/icons';

import ButtonDefault from ".";

describe("<ButtonDefault />", () => {

  beforeEach(() => {
    renderWithTheme(
      <ButtonDefault
        bgColor="#000"
        color="#fff"
        height={80}
        width={180}
        text="Default"
        icon={Check}
      />
    );
  });

  it("should display text button", () => {
    expect(screen.getByText("Default")).toBeInTheDocument();
  });

  it("should have the style", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({
      width: "180px",
      height: "80px",
      background: "#000",
      border: "1px solid #000",
    });

  });

  it("should display icon", () => {
    const icon = screen.getByRole("icon");
    expect(icon).toHaveAttribute("src", Check);

  });

  it("should match snapshot", () => {
    const tree = renderSnapshotWithTheme(
      <ButtonDefault
        bgColor="#000"
        color="#fff"
        height={80}
        width={180}
        text="Default"
        icon={Check}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
