import { Button, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import GroupsIcon from '@mui/icons-material/Groups'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import SportsIcon from '@mui/icons-material/Sports'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'

const Parents = () => {
    return (
        <Container id='id7' maxWidth='md'>
            <Typography variant='h4' sx={{ mb: '1rem', textAlign: 'center' }}>
                Родителям
            </Typography>
            <Stack
                justifyContent={{ xs: 'column', md: 'row' }}
                gap={2}
                marginBottom='1rem'
            >
                <Typography variant='body1'>
                    Выбор будущего для Вашего ребёнка – вопрос очень важный и
                    ответственный. Ведь очень важно, чтобы ребёнок с самого
                    детства полюбил спорт, чтобы системные тренировки шли на
                    пользу, развивали юного спортсмена во всех направлениях.
                </Typography>
                <Typography variant='body1'>
                    Футбол, несомненно, является видом спорта наиболее
                    всесторонне и гармонично развивающим ребенка как в его
                    индивидуальных качествах, так и части команды, имеющей общую
                    цель. Чувство спортивного соперничества и командного
                    партнёрства придают ребенку понимания собственной роли в
                    обществе и задают стимулы к развитию.
                </Typography>
                <Typography variant='body1' sx={{ mb: '1rem' }}>
                    Чем раньше ребёнок начнет заниматься футболом, тем раньше он
                    получит важные физические навыки и будет иметь преимущества
                    в спортивной среде и обычной жизни, среди которых:
                </Typography>
                <Stack
                    justifyContent={'center'}
                    gap={2}
                    flexDirection={{ xs: 'column', md: 'row' }}
                >
                    <Stack gap={2}>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <FitnessCenterIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>Развитая физическая сила</Typography>
                        </Stack>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <DirectionsRunIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>Скорость</Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <GroupsIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>Командное взаимодействие</Typography>
                        </Stack>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <SportsIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>Дисциплина</Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <SportsGymnasticsIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>Координация</Typography>
                        </Stack>
                        <Stack
                            gap={2}
                            flexDirection={'column'}
                            alignItems='center'
                        >
                            <SportsSoccerIcon
                                color='primary'
                                sx={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            <Typography>
                                Способность к принятию решений
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                justifyContent={{ xs: 'column', md: 'row' }}
                gap={2}
                marginBottom='3rem'
            >
                <Typography variant='body1'>
                    Футбольные тренировки комплексно развивают и отрабатывают
                    как навык индивидуального владения мячом, так и создание и
                    реализацию командных многоходовых комбинаций, направленных
                    на достижение общей победы.
                </Typography>
                <Typography variant='body1'>
                    Мы воспитываем в детях сильную, уверенную в себе личность,
                    устойчивую к физическим и эмоциональным нагрузкам,
                    приспособленным к современной жизни.
                </Typography>
                <Typography variant='body1'>
                    Футбол безусловно помогает ребёнку в школе и готовит к
                    будущей успешной жизни!
                </Typography>
            </Stack>

            <Paper
                elevation={6}
                sx={{ padding: '1rem', maxWidth: '500px', margin: '0 auto' }}
            >
                <Stack
                    flexDirection={'row'}
                    gap={2}
                    justifyContent='space-between'
                    alignItems={'center'}
                >
                    <Typography variant='h5'>
                        Скачайте и ознакомьтесь с договором оказания услуг
                    </Typography>
                    <Button
                        variant={'contained'}
                        href={'/files/1.pdf'}
                        target='_blank'
                        rel='noopener noreferrer'
                        download={'ДОГОВОР с приложениями'}
                    >
                        Скачать
                    </Button>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Parents
