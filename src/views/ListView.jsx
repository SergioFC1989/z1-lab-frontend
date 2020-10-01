import React from 'react'
import Box from '../components/Box'


class ListView extends React.Component {

  render() {
    return (
      <Box fill="true">
        <Box layout="true">
          <Box column="true" direction="row" wrap="true">
            <Box card>1</Box>
            <Box card>2</Box>
            <Box card>3</Box>
            <Box card>4</Box>
            <Box card>5</Box>
            <Box card>6</Box>
            <Box card>7</Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default ListView;