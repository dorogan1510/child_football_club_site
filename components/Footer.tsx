import {
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ManIcon from '@mui/icons-material/Man'
import { Container } from '@mui/system'
import Grid2 from '@mui/material/Unstable_Grid2'
import style from '../styles/Footer.module.scss'
import Image from 'next/image'
import logo from '../src/img/logo.png'

const Footer = () => {
    return (
        <Stack
            sx={{
                backgroundColor: 'primary.main',
                padding: '2rem',
                color: 'white',
            }}
        >
            {/* <Typography sx={{ mb: 2, textAlign: 'center' }} variant='h5'>
                Контакты
            </Typography> */}
            <Stack
                justifyContent={'space-between'}
                padding={'0 2rem'}
                alignItems={{ xs: 'center', md: 'start' }}
                gap={2}
                flexDirection={{ xs: 'column', md: 'row' }}
            >
                <Grid2 textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography variant='h5' gutterBottom>
                        Главный тренер:
                    </Typography>
                    <Typography variant='h6' gutterBottom>
                        Задорожный Вячеслав Александрович
                    </Typography>
                    <Stack gap={1} justifyContent='space-between'>
                        <Link className={style.link} href='callto:+79370658133'>
                            +7 937 065 81 33
                        </Link>
                        <Link
                            className={style.link}
                            href='mailto:dfk.bezenchuk@yandex.ru'
                        >
                            dfk.bezenchuk@yandex.ru
                        </Link>
                    </Stack>
                </Grid2>
                <Image
                    className={style.logo}
                    src={logo}
                    alt={'logo'}
                    width={100}
                />
                <Grid2 textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography variant='h5' gutterBottom>
                        Родительский комитет:
                    </Typography>
                    <Typography variant='h6'>
                        Курышов Михаил Николаевич
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        +7 960 814 97 59
                    </Typography>
                    <Typography variant='h6'>
                        Бондаренко Владимир Иванович
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        +7 917 038 94 42
                    </Typography>
                    <Typography variant='h6'>
                        Глазунов Александр Николаевич
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                        +7 927 700 02 23
                    </Typography>
                    {/* <List sx={{ color: 'white' }}>
                        <ListItem>
                            <ListItemText
                                secondaryTypographyProps={{
                                    color: 'white',
                                }}
                                primary='Курышов Михаил Николаевич'
                                secondary='+7 960 814 97 59'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                secondaryTypographyProps={{
                                    color: 'white',
                                }}
                                primary='Бондаренко Владимир Иванович'
                                secondary='+7 917 038 94 42'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                secondaryTypographyProps={{
                                    color: 'white',
                                }}
                                primary='Глазунов Александр Николаевич'
                                secondary='+7 927 700 02 23'
                            />
                        </ListItem>
                    </List> */}
                </Grid2>
            </Stack>
        </Stack>
    )
}

export default Footer
