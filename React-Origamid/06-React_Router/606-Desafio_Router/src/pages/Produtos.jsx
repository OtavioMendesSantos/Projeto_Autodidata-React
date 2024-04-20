
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import Head from '../components/Head'
import { useNavigate } from 'react-router-dom'

const Produtos = () => {
    const [produtos, setProdutos] = React.useState(null)
    const navigate = useNavigate()

    const fetchProdutos = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setProdutos(data)
    }

    React.useEffect(() => {
        fetchProdutos('https://ranekapi.origamid.dev/json/api/produto/')
    }, [])

    const handleClick = async (id) => {
        navigate(`/produtos/${id}`);
    }

    return (
        <>
            <Head title='Produtos' description='Página de Produtos'/>
            <Typography 
                variant='h1'
                sx={{ textAlign: 'center', margin: '20px auto' }} 
            >
                Produtos
            </Typography>
            <Grid container spacing='30px' justifyContent={'center'}>
                {produtos && produtos.map((item) => (
                    <Grid item key={item.id}>
                        <Card 
                            sx={{ width: '300px' }}
                        >
                            <CardActionArea onClick={() => {handleClick(item.id)}}>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        image={item.fotos[0].src}
                                        alt="green iguana"
                                        sx={{width: '100%', height: '100%'}}
                                    />
                                    <Typography
                                        component="p"
                                        variant='overline'
                                        sx={{fontWeight: 'bold', m: '10px' }}
                                    >
                                        Apenas:
                                        <Typography 
                                            component="span"
                                            sx={{ display: 'inline-block', bgcolor: '#f5f5f5', padding: '10px', borderRadius: '10px', m:'0px 10px', width: 'fit-content' }}    
                                        >
                                            {(item.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
                                        </Typography>
                                    </Typography>
                                </CardContent>
                                <CardHeader title={item.nome} sx={{ textAlign: 'center' }}/>
                            </CardActionArea>
                        </ Card>
                    </Grid>
                    
                ))}
            </Grid>
        </>
    )
}

export default Produtos
