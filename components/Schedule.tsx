import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import React from 'react'
import styles from '../styles/Offer.module.scss'

const Schedule = () => {
    return (
        <Box id='id5' padding={'0 2rem'}>
            <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>
                Расписание тренировок
            </Typography>
            <Grid2
                container
                spacing={4}
                columns={{ sm: 1, md: 12 }}
                alignItems='center'
                sx={{ marginBottom: '3rem' }}
            >
                <Grid2 xs={12} md={6} lg={3}>
                    <Card
                        sx={{
                            sm: { maxWidth: 500 },
                            md: {
                                minWidth: 275,
                                maxWidth: 300,
                                height: '210px',
                                margin: '0 auto',
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                Младшая группа
                            </Typography>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color='text.secondary'
                                gutterBottom
                            >
                                (2007-2009 г/р)
                            </Typography>

                            <Typography variant='body1'>
                                Проводятся полуторачасовые тренировки во
                                вторник, четверг, воскресенье с 15.30-17.00.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'>
                                Записаться на пробное занятие
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={6} lg={3}>
                    <Card
                        sx={{
                            sm: { maxWidth: 500 },
                            md: {
                                minWidth: 275,
                                maxWidth: 300,
                                height: '210px',
                                margin: '0 auto',
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                Средняя группа
                            </Typography>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color='text.secondary'
                                gutterBottom
                            >
                                (2010-2012 г/р)
                            </Typography>

                            <Typography variant='body1'>
                                Проводятся полуторачасовые тренировки в
                                понедельник, среда, пятница с 15.30- 17.00
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'>
                                Записаться на пробное занятие
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={6} lg={3}>
                    <Card
                        sx={{
                            sm: { maxWidth: 500 },
                            md: {
                                minWidth: 275,
                                maxWidth: 300,
                                height: '210px',
                                margin: '0 auto',
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                Старшая группа
                            </Typography>
                            <Typography
                                sx={{ fontSize: 14 }}
                                color='text.secondary'
                                gutterBottom
                            >
                                (2013-2016 г/р)
                            </Typography>

                            <Typography variant='body1'>
                                Провдятся часовые тренировки в понедельник,
                                среда, пятница с 17.00-18.00
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'>
                                Записаться на пробное занятие
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
                <Grid2 xs={12} md={6} lg={3}>
                    <Card
                        sx={{
                            sm: { maxWidth: 500 },
                            md: {
                                minWidth: 275,
                                maxWidth: 300,
                                height: '210px',
                                margin: '0 auto',
                            },
                        }}
                    >
                        <CardContent>
                            <Typography variant='h5' component='div'>
                                Индивидуальные тренировки
                            </Typography>

                            <Typography variant='body1'>
                                Проводятся в плавающем графике, в зависимости от
                                фактической загрузки тренерского состава и
                                тренировочного поля
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'>
                                Записаться на пробное занятие
                            </Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Schedule
