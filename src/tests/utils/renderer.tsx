import { JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import renderer, { TestRendererOptions } from "react-test-renderer";

import GlobalStyle from "styles/global";

type RTLQueries = typeof import("@testing-library/dom/types/queries");

type Component = ReactElement<unknown, string | JSXElementConstructor<unknown>>;
type Options = Omit<RenderOptions<RTLQueries, HTMLElement>, "queries"> | undefined;

const renderWithTheme = (component: Component, options?: Options, theme = {}) => {
  const ThemeWrapper: React.FC = ({ children }: PropsWithChildren<ReactNode>) => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );

  return render(component, { wrapper: ThemeWrapper, ...options });
};

const renderSnapshotRawWithTheme = (
  component: ReactElement,
  options?: TestRendererOptions,
  theme = {}
) =>
  renderer.create(
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {component}
      </>
    </ThemeProvider>,
    options
  );

const renderSnapshotWithTheme = (
  component: ReactElement,
  options?: TestRendererOptions,
  theme = {}
) => renderSnapshotRawWithTheme(component, options, theme).toJSON();

export { renderWithTheme, renderSnapshotWithTheme, renderSnapshotRawWithTheme };
