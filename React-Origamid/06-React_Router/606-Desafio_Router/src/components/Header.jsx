// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button, ButtonGroup, Grid } from '@mui/material'

const Header = () => {
    const navigate = useNavigate()

    const handleClick = (url) => {
        navigate(url)
    }

    return (
        <Grid component="header" container justifyContent={'center'} alignItems={'center'} >
            <ButtonGroup 
                variant="contained"
                sx={{ p: '20px'}}
            >
                <Button onClick={()=>handleClick('produtos')}>Produtos</Button>
                <Button onClick={()=>handleClick('contato')}>Contato</Button>
            </ButtonGroup>
        </Grid>
    )
}

export default Header
