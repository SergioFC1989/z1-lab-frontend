import React from 'react'
import Box from '../components/Box'

class ListView extends React.Component {

  render() {
    return (
      <Box fill justify="center">
        <Box justify="space-between" wrap>
          <Box direction="row" background="#F2F2F2" radius="15px">X</Box>
          <Box direction="row" background="#F2F2F2" radius="15px">Y</Box>
          <Box direction="row" background="#F2F2F2" radius="15px">X</Box>
          <Box direction="row" background="#F2F2F2" radius="15px">Y</Box>
        </Box>
      </Box>
    )
  }
}

export default ListView;