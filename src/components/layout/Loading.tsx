import React,{FC} from 'react'
import {Box} from '@mui/material'
import loading from  './Loading1.gif'
const Loading:FC = () => {
   return(
      <Box ml={13} mt={4}>
      <img src={loading} alt='loading' width='50%'/>
      </Box>
     )
}
export default Loading;