import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import '../styles/globals.css';

const Application = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default Application;