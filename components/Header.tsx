import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Image from 'next/image'
import logo from '../src/img/logo.png'
import Link from 'next/link'
import style from '../styles/Header.module.scss'

const pages = [
    {
        id: '#id1',
        title: 'Наш путь',
    },
    {
        id: '#id2',
        title: 'Наши цели',
    },
    {
        id: '#id3',
        title: 'Главный тренер',
    },
    {
        id: '#id4',
        title: 'Стоимость',
    },
    {
        id: '#id5',
        title: 'Расписание',
    },
    {
        id: '#id6',
        title: 'Тренировочные площадки',
    },
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar color='primary' position='static' sx={{ padding: '1rem 0' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Image
                        src={logo}
                        alt={'logo'}
                        width={46}
                        height={54}
                        style={{ marginRight: '1rem' }}
                    />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ДФК Безенчук
                    </Typography>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ДФК Безенчук
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        variant='body1'
                                        textAlign='center'
                                    >
                                        <Button
                                            color='inherit'
                                            sx={{ fontWeight: 'bold' }}
                                            href={page.id}
                                        >
                                            {page.title}
                                        </Button>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            justifyContent: 'flex-end',

                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map(page => (
                            <Button
                                className={style.link}
                                href={page.id}
                                key={page.id}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    display: 'block',
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default ResponsiveAppBar
