import React from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useColorMode } from "@docusaurus/theme-common";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

type MaterialThemeProviderProps = {
  children: React.ReactChildren;
}

// Note: based on ThemedComponent from Docusaurus
// It isn't exported unfortunately.
function MaterialThemeProvider(props: MaterialThemeProviderProps) {
  type Theme = "light" | "dark";

  const isBrowser = useIsBrowser();
  const { colorMode } = useColorMode();

  function getThemesToRender(): Theme[] {
    if (isBrowser) {
      return colorMode === "dark" ? ["dark"] : ["light"];
    }
    // We need to render both components on the server / hydration to avoid:
    // - a flash of wrong theme before hydration
    // - React hydration mismatches
    // See https://github.com/facebook/docusaurus/pull/3730
    return ["light", "dark"];
  }

  return (
    <>
      {getThemesToRender().map((theme) => {
        // NOTE: key is intentionally the same because it kinda works better
        // because React treats the content of it unchanged when theme changes.
        // I'm not sure if it is supposed to work like that, but it works for now.
        return (
          <ThemeProvider key="x" theme={theme === "dark" ? darkTheme : lightTheme}>
            {props.children}
          </ThemeProvider>
        );
      })}
    </>
  );
}

type Props = WrapperProps<typeof LayoutType> & {
  children: React.ReactChildren;
};

export default function LayoutWrapper(props: Props): JSX.Element {
  const propsNoChildren = { ...props };
  delete propsNoChildren.children;

  return (
    <Layout {...propsNoChildren}>
      <MaterialThemeProvider>
        {props.children}
      </MaterialThemeProvider>
    </Layout>
  );
}