import { cleanup, screen } from "@testing-library/react";

import { renderSnapshotWithTheme, renderWithTheme } from "tests/utils/renderer";

import Evaluation from ".";

describe("<Evaluation />", () => {

  it("should render the given amount of stars", () => {
    renderWithTheme(<Evaluation  note={4} />);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(4);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(1);

    cleanup();

    renderWithTheme(<Evaluation  note={1} />);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(4);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(1);

    cleanup();

    renderWithTheme(<Evaluation  note={2} />);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(3);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(2);

    cleanup();

    renderWithTheme(<Evaluation  note={3} />);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(2);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(3);

    cleanup();

    renderWithTheme(<Evaluation  note={5} />);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(5);

    cleanup();
    renderWithTheme(<Evaluation  note={6} />);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(5);

    cleanup();

    renderWithTheme(<Evaluation  note={-6} />);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(5);

    cleanup();

    renderWithTheme(<Evaluation  note={4.6} />);
    expect(screen.getAllByTestId('star-mid')).toHaveLength(1);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(4);

    cleanup();

    renderWithTheme(<Evaluation  note={2.5} />);
    expect(screen.getAllByTestId('star-mid')).toHaveLength(1);
    expect(screen.getAllByTestId('star-solid')).toHaveLength(2);
    expect(screen.getAllByTestId('star-outlined')).toHaveLength(2);

  });

  it("should display number note", () => {
    renderWithTheme(<Evaluation note={1} withNumber={true} />);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = renderSnapshotWithTheme(<Evaluation note={4.5} />);
    expect(tree).toMatchSnapshot();
  });
});
