import { Typography } from '@mui/material'
import React from 'react'
import style from '../styles/OurPurposes.module.scss'
import StadiumIcon from '@mui/icons-material/Stadium'
import DescriptionIcon from '@mui/icons-material/Description'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

const OurPurposes = () => {
    return (
        <div id='id2' className={style.purpose}>
            <Typography
                variant='h4'
                textAlign={'center'}
                sx={{ marginBottom: '2rem' }}
            >
                Наши цели
            </Typography>

            <div className={style.purpose__flex}>
                <div className={style.purpose__half}>
                    <div className={style.purpose__half_1}>
                        <StadiumIcon
                            color='primary'
                            sx={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />

                        <Typography variant='body1'>
                            Создание детской футбольной академии на базе нашего
                            клуба
                        </Typography>
                    </div>
                    <div className={style.purpose__half_1}>
                        <DescriptionIcon
                            color='primary'
                            sx={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />
                        <Typography variant='body1'>
                            Создание профессионального футбольного клуба,
                            выступающего в чемпионате России по футболу и
                            состоящего из собственных воспитанников
                        </Typography>
                    </div>
                </div>
                <div className={style.purpose__half}>
                    <div className={style.purpose__half_1}>
                        <SportsSoccerIcon
                            color='primary'
                            sx={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />
                        <Typography variant='body1'>
                            Участие в профессиональной футбольной селекционной и
                            агентской деятельности на основе профессиональных
                            контрактов с своими воспитанниками и сторонними
                            игроками
                        </Typography>
                    </div>
                    <div className={style.purpose__half_1}>
                        <EmojiEventsIcon
                            color='primary'
                            sx={{
                                width: '30px',
                                height: '30px',
                                marginBottom: '1rem',
                            }}
                        />
                        <Typography variant='body1'>
                            Взаимодействие с Союзом Европейских Футбольных
                            Ассоциаций (UEFA) и клубами Союза как в селекционной
                            работе, так и состязаниях лиг Союза
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPurposes
