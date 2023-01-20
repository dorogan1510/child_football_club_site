import React from 'react'
import style from '../styles/Hero.module.scss'

import { Box, Button, Typography } from '@mui/material'

const HeroSection = () => {
    return (
        <div className={style.hero}>
            <Box
                sx={{
                    maxWidth: { xs: '80%', md: '70%' },
                    color: 'white',
                    padding: '6rem 10% 8rem 10%',
                }}
            >
                <Typography variant='h1' gutterBottom>
                    Детский футбольный клуб &quot;Безенчук&quot;
                </Typography>
                <Typography variant='body1' sx={{ marginBottom: '3rem' }}>
                    Мы воспитываем в детях сильную, уверенную в себе личность,
                    устойчивую к физическим и эмоциональным нагрузкам,
                    приспособленным к современной жизни.
                </Typography>
                <Button
                    variant='contained'
                    size='large'
                    sx={{ borderRadius: '10px' }}
                >
                    Записаться на пробный урок
                </Button>
            </Box>
        </div>
    )
}

export default HeroSection
