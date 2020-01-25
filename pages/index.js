import React from "react"
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Link
} from 'rebass'


export default class Index extends React.Component {
    render = () => {
        return (
            <Box>
                <Heading my="25px">Science Fair Projects</Heading>
                <Flex flexWrap='wrap' mx={-2}>
                    <Card variant="card">
                        <Link variant="normal" href="/projects/recyclesmart">
                            <Image src="/images/state_recyclesmart.JPG" sx={{ width: "100%" }} />
                        <Box p="10px" color="black">
                            <Heading my={2} sx={{ fontSize: [2,4] }}>RecycleSmart</Heading>
                            <Text>An app that uses AI to sort and recycle waste!</Text>
                        </Box>
                        </Link>
                    </Card>
                    <Card variant="card">
                        <Link variant="normal" href="/projects/whats-in-your-water">
                            <Image src="/images/state_recyclesmart.JPG" sx={{ width: "100%" }} />
                        <Box p="10px" color="black">
                            <Heading my={2} sx={{ fontSize: [2,4] }}>What's in Your Water?</Heading>
                            <Text>An experiment to convince people to use tap water!</Text>
                        </Box>
                        </Link>
                    </Card>
                </Flex>
            </Box>
            )
    }
}