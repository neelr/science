import React from "react";
import { Heading, Flex, Text, Link, Box } from "rebass";

export default class Layout extends React.Component {
  render() {
    return (
      <Flex flexDirection="column" minHeight="100vh">
        <Flex py="10px" bg="primary" color="white" px={2} alignItems="center">
          <Link p={2} fontWeight="bold" href="/" variant="nav">
            Science Fair
          </Link>
          <Box mx="auto" />
          <Link variant="nav" href="https://neelr.dev">
            Website
          </Link>
          <Link variant="nav" href="https://neelr.dev/static/resume.pdf">
            Resume
          </Link>
          <Link variant="nav" href="https://notebook.neelr.dev">
            Notebook
          </Link>
        </Flex>
        <Flex mb="20px">
          <Box mx="auto" />
          <Box sx={{ width: ["90vw", "75vw"] }}>
            {this.props.children}
          </Box>
          <Box mx="auto" />
        </Flex>
        <Flex sx={{ height: "50px",m:"30px", marginTop: "auto", flexDirection: "column" }}>
          <Text m="auto">Made with 💖 by <Link href="https://github.com/neelr">@neelr</Link></Text>
          <Link m="auto" href="https://github.com/neelr/science">Source</Link>
        </Flex>
      </Flex>
    );
  }
}