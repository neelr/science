import React from "react";
import { ThemeProvider } from "theme-ui";
import Layout from "../components/Layout";
import theme from "../components/theme";
import {Heading, Text} from "rebass"
import { MDXProvider } from '@mdx-js/react'

const components = {
    h1: (props) => <Heading sx={{fontSize:6,my:"25px"}}>{props.children}</Heading>,
    h2: (props) => <Heading sx={{fontSize:5, my:"10px"}}>{props.children}</Heading>,
    h3: (props) => <Heading sx={{fontSize:4}}>{props.children}</Heading>,
    p: Text
}
  

export default ({ Component, pageProps }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </MDXProvider>
);
