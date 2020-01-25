import React from "react";
import { Heading, Flex, Text, Link, Box } from "rebass";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
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
		<Flex>
			<Box mx="auto" />
			<Box sx={{ width: ["90vw","75vw"] }}>
				{this.props.children}
			</Box>
			<Box mx="auto" />
		</Flex>
      </div>
    );
  }
}