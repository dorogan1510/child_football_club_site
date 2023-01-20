import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import Link from 'next/link'
import React from 'react'
import WarningIcon from '@mui/icons-material/Warning'

const TrainingPlaces = () => {
    return (
        <Container id='id6' sx={{ borderRadius: '0 0 20px 20px' }}>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                gap={2}
                alignItems={'center'}
                sx={{
                    mb: '3rem',
                }}
            >
                <WarningIcon
                    color='primary'
                    sx={{
                        width: '70px',
                        height: '70px',
                    }}
                />
                <Paper
                    sx={{
                        backgroundColor: 'primary.main',
                        padding: '1rem',
                        color: 'white',
                        borderRadius: '20px',
                    }}
                >
                    <Typography variant='h5'>
                        Время и место проведения занятий уточняйте у тренера или
                        в группах по возрастам в социальных сетях!
                    </Typography>
                </Paper>
            </Stack>

            <Typography variant='h4' sx={{ mb: '2rem' }}>
                Наши тренировочные площадки в холодное время года:
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, md: 12 }}
                justifyContent='center'
                sx={{ marginBottom: '3rem' }}
            >
                <Grid2 xs={4}>
                    <Stack gap={2}>
                        <Paper elevation={6} sx={{ padding: '1rem' }}>
                            <Typography>
                                1. Спортивный зал СК «Молодёжный», улица
                                Луговцева, 54А, посёлок городского типа
                                Безенчук, Самарская область, 446252
                            </Typography>
                        </Paper>
                        <Paper elevation={6} sx={{ padding: '1rem' }}>
                            <Typography>
                                2. Спортивный зал ГБУ школы № 4, улица
                                Центральная, 89, п. г. т. Безенчук
                            </Typography>
                        </Paper>
                        <Paper elevation={6} sx={{ padding: '1rem' }}>
                            <Typography>
                                3. Спортивный зал Сельскохозяйственного
                                техникума по адресу: ул. Тимирязева, 94, п. г.
                                т. Безенчук
                            </Typography>
                        </Paper>
                    </Stack>
                </Grid2>
                <Grid2 xs={8}>
                    <iframe
                        src='https://yandex.ru/map-widget/v1/?um=constructor%3A364939120e6e8083b6c3dbcac7c39d850ef6cd2bd0c4c36cb7db963fbee51abb&amp;source=constructor'
                        width='100%'
                        height='400'
                    ></iframe>
                </Grid2>
            </Grid2>
            <Typography variant='h4' sx={{ mb: '2rem' }}>
                Наши тренировочные площадки в теплое время года:
            </Typography>
            <Grid2
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 1, md: 12 }}
                justifyContent='center'
                sx={{ paddingBottom: '3rem' }}
            >
                <Grid2 xs={4}>
                    <Stack gap={2}>
                        <Paper elevation={6} sx={{ padding: '1rem' }}>
                            <Typography>
                                1. Стадион Труд имени П.Д. Олесова, напротив
                                дома по адресу: улица Луговцева, 47, посёлок
                                городского типа Безенчук, Самарская область,
                                446250
                            </Typography>
                        </Paper>
                        <Paper elevation={6} sx={{ padding: '1rem' }}>
                            <Typography>
                                2. Открытая спортивная площадка во дворе дома по
                                адресу: улица Советская, 95А, п г т Безенчук,
                                Самарская область, 446253
                            </Typography>
                        </Paper>
                    </Stack>
                </Grid2>
                <Grid2 xs={8}>
                    <iframe
                        src='https://yandex.ru/map-widget/v1/?um=constructor%3Aa5b20eb7a5a298ed55f151d4b3b3fc76a9616fba7478e5f0a25937fe7b3ec981&amp;source=constructor'
                        width='100%'
                        height='400'
                    ></iframe>
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default TrainingPlaces
