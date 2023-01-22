'use client'

import HeadCoach from '@/components/HeadCoach'
import OurPurposes from '@/components/OurPurposes'
import OurWay from '@/components/OurWay'
import Parents from '@/components/Parents'
import Price from '@/components/Price'
import Schedule from '@/components/Schedule'
import TrainingPlaces from '@/components/TrainingPlaces'

export default function Home() {
    return (
        <>
            <main>
                <OurWay />
                <OurPurposes />
                <HeadCoach />
                <Price />
                <Schedule />
                <TrainingPlaces />
                <Parents />
            </main>
        </>
    )
}
