import React from 'react'
import style from '../styles/Hero.module.scss'

import { Box, Button, Container, Typography } from '@mui/material'

const HeroSection = () => {
    return (
        <div className={style.hero}>
            <Container>
                <Box
                    sx={{
                        maxWidth: { xs: '80%', md: '70%' },
                        color: 'white',
                        padding: '6rem 0 8rem 0',
                    }}
                >
                    <Typography variant='h1' gutterBottom>
                        Детский футбольный клуб &quot;Безенчук&quot;
                    </Typography>
                    <Typography variant='body1' sx={{ marginBottom: '3rem' }}>
                        Мы воспитываем в детях сильную, уверенную в себе
                        личность, устойчивую к физическим и эмоциональным
                        нагрузкам, приспособленным к современной жизни.
                    </Typography>
                    <Button
                        variant='contained'
                        href={
                            'https://api.whatsapp.com/send?phone=79370658133&text='
                        }
                        target='_blank'
                        sx={{ textAlign: 'center' }}
                    >
                        Записаться на пробное занятие
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default HeroSection
