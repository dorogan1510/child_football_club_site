import {
    Container,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Box,
    Typography,
    CardActions,
    Button,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import styles from '../styles/Reviews.module.scss'

const tiers = [
    {
        title: 'Для старшей (2007-2009 г/р) и средней группы (2010-2012 г/р) ',
        price: '1500',
    },
    {
        title: 'Для младшей группы (2013 – 2016 г/р) ',
        price: '1000',
    },
    {
        title: 'Для детей участников СВО',
        price: '30',
    },
]

const Price = () => {
    return (
        <Container id='id4' maxWidth='md' component='main' sx={{ mb: '3rem' }}>
            <Typography variant='h4' textAlign={'center'} sx={{ mb: '2rem' }}>
                Стоимость участия в детском футбольном клубе
            </Typography>
            <Grid2 container spacing={5} alignItems='center'>
                <Grid2 xs={12} md={4}>
                    <Card>
                        <CardHeader
                            title='Для старшей группы (2007-2009 г/р) и средней группы (2010-2012 г/р) '
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{
                                align: 'center',
                            }}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                            }}
                        />
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                }}
                            >
                                <Typography
                                    component='h2'
                                    variant='h4'
                                    color='text.primary'
                                >
                                    ₽1500
                                </Typography>
                                <Typography variant='h6' color='text.secondary'>
                                    /ежемесячно
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title='Для младшей группы (2013 – 2016 г/р)'
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{
                                align: 'center',
                            }}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                            }}
                        />
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',
                                }}
                            >
                                <Typography
                                    component='h2'
                                    variant='h4'
                                    color='text.primary'
                                >
                                    ₽1000
                                </Typography>
                                <Typography variant='h6' color='text.secondary'>
                                    /ежемесячно
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title='Для детей участников СВО (специальной военной операции) '
                            titleTypographyProps={{ align: 'center' }}
                            subheaderTypographyProps={{
                                align: 'center',
                            }}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                            }}
                        />
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'baseline',

                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    component='h2'
                                    variant='h4'
                                    color='text.primary'
                                >
                                    Предусмотрены льготные условия
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Price
