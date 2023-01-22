import { Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import coach from '../src/img/head_coach.jpg'
import style from '../styles/HeadCoach.module.scss'

const HeadCoach = () => {
    return (
        <Paper
            id='id3'
            elevation={6}
            sx={{
                padding: { xs: '1rem 1rem', md: '3rem 6rem' },
                backgroundColor: '#252528',
                color: 'white',
                marginBottom: '3rem',
            }}
        >
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={4}
            >
                <Stack
                    flexDirection={'column'}
                    alignItems={'center'}
                    spacing={1}
                >
                    <Image
                        src={coach}
                        alt={'coach'}
                        priority
                        className={style.headcoach_image}
                    />
                </Stack>
                <Stack>
                    <Stack marginBottom={'2rem'}>
                        <Typography
                            variant='h4'
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            Задорожный Вячеслав Александрович
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ textAlign: 'center' }}
                        >
                            Руководитель клуба и главный тренер
                        </Typography>
                    </Stack>
                    <Stack
                        flexDirection={{ xs: 'column', md: 'row' }}
                        gap={2}
                        alignItems={'center'}
                    >
                        <Stack spacing={2}>
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    borderRadius: '10px',
                                }}
                            >
                                <Typography variant='body1'>
                                    Уроженец Безенчука
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    borderRadius: '10px',
                                }}
                            >
                                <Typography variant='body1'>
                                    Окончил Самарский государственный
                                    социально-педагогический университет по
                                    профессии тренер-преподаватель по футболу
                                </Typography>
                            </Paper>
                        </Stack>

                        <Stack spacing={2}>
                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    borderRadius: '10px',
                                }}
                            >
                                <Typography variant='body1'>
                                    Опытный тренер и преподаватель, спортивную
                                    деятельность ведёт с 2013. До 2021 года
                                    являлся тренером и преподавателем ГБОУ СО Ш
                                    № 2 п.г.т. Безенчук с/п «ДЮСШ»
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={6}
                                sx={{
                                    padding: '1rem',
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    borderRadius: '10px',
                                }}
                            >
                                <Typography variant='body1'>
                                    Имеет значительный опыт по представлению
                                    футбольных команд Безенчука на соревнованиях
                                    различного уровня. Среди достижений –
                                    призовые места в городских и областных
                                    футбольных турнирах
                                </Typography>
                            </Paper>
                        </Stack>
                        <Stack></Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default HeadCoach
