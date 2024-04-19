import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';

const BoxEstilizada1 = styled(Box)(({ theme }) => ({
  border: '1px dashed grey',
  padding: '10px',
  '&:hover': {
      backgroundColor: 'red',
  },
}));

const BoxEstilizada = () => {
  return (
    <BoxEstilizada1 component="section">
      Isto é uma box estilizada
    </BoxEstilizada1>
  )
}

export default BoxEstilizada
