import React from "react"
import {
    Box,
    Card,
    Image,
    Heading,
    Text
  } from 'rebass'


export default class Index extends React.Component {
    render = () => {
        return(
              <Box width={256}>
                <Card
                sx={{
                    p: 1,
                    borderRadius: 2,
                    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                }}>
                <Image src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20" />
                <Box px={2}>
                    <Heading as='h3'>
                    Salt
                    </Heading>
                    <Text fontSize={0}>
                    Can me get salt
                    </Text>
                </Box>
                </Card>
            </Box>
        )
    }
}