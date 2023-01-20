import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Typography from '@mui/material/Typography'
import {
    Paper,
    Stack,
    Step,
    StepConnector,
    StepContent,
    StepLabel,
    Stepper,
} from '@mui/material'

export default function BasicCard() {
    return (
        <Box
            id='id1'
            sx={{
                padding: '0 1rem',
                marginBottom: '3rem',
                borderRadius: '20px 20px 0 0',
            }}
        >
            <Typography variant='h4' textAlign={'center'} gutterBottom>
                Наш путь
            </Typography>

            <Box sx={{ maxWidth: 700, margin: '0 auto' }}>
                <Stepper orientation='vertical'>
                    <Step active>
                        <CheckCircleIcon
                            color='primary'
                            sx={{ width: '30px', height: '30px' }}
                        />
                        <StepContent>
                            <Typography variant='body1'>
                                Участие в товарищеских матчах с детскими
                                футбольными клубами и академиями как на домашней
                                площадке, так и выездных играх
                            </Typography>
                        </StepContent>
                    </Step>
                    <Step active>
                        <CheckCircleIcon
                            color='primary'
                            sx={{ width: '30px', height: '30px' }}
                        />
                        <StepContent>
                            <Typography variant='body1'>
                                Участие в городских и областных соревнованиях во
                                всех возрастных категориях клуба
                            </Typography>
                        </StepContent>
                    </Step>
                    <Step active>
                        <CheckCircleIcon
                            color='primary'
                            sx={{ width: '30px', height: '30px' }}
                        />
                        <StepContent>
                            <Typography variant='body1'>
                                Организация выездных футбольных лагерей на
                                территории страны, тренировок и сборов, а также
                                состязаний с иностранными командами
                            </Typography>
                        </StepContent>
                    </Step>
                    <Step active>
                        <CheckCircleIcon
                            color='primary'
                            sx={{ width: '30px', height: '30px' }}
                        />
                        <StepContent>
                            <Typography variant='body1'>
                                Приглашение и посещение футболистов,
                                специалистов и футбольных функционеров из
                                рейтинговых клубов страны для демонстрации
                                мастер-классов и обмена опытом
                            </Typography>
                        </StepContent>
                    </Step>
                    <Step active>
                        <CheckCircleIcon
                            color='primary'
                            sx={{ width: '30px', height: '30px' }}
                        />
                        <StepContent>
                            <Typography variant='body1'>
                                Приглашение и посещение футболистов,
                                специалистов и футбольных функционеров из
                                рейтинговых клубов страны для демонстрации
                                мастер-классов и обмена опытом
                            </Typography>
                        </StepContent>
                    </Step>
                </Stepper>
            </Box>
        </Box>
    )
}
