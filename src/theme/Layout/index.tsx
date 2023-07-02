import React from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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

function MaterialThemeProvider(props: MaterialThemeProviderProps) {
  const { colorMode } = useColorMode();

  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      {props.children}
    </ThemeProvider>
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