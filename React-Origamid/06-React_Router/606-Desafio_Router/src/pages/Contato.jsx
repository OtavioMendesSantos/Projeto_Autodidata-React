// eslint-disable-next-line no-unused-vars
import { Grid, Typography } from '@mui/material'
import React from 'react'
import Head from '../components/Head'

const Contato = () => {
  return (
    <>
        <Head title='Contato' description='Página de contato'/>
        <Grid container>
            <Typography 
                variant='h1'
                sx={{ textAlign: 'center', margin: '20px auto' }} 
            >
                Contato
            </Typography>
            <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, quisquam nihil temporibus distinctio et quam consequatur sit cum eius nobis odio nesciunt accusamus rerum similique porro mollitia atque ex iste!
            </Typography>
        </Grid>
    </>
  )
}

export default Contato
