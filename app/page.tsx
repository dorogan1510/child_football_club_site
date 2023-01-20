'use client'
import HeroSection from '@/components/HeroSection'
import OurWay from '@/components/OurWay'
import Price from '@/components/Price'
import HeadCoach from '@/components/HeadCoach'
import Schedule from '@/components/Schedule'
import TrainingPlaces from '@/components/TrainingPlaces'
import OurPurposes from '@/components/OurPurposes'
import Footer from '@/components/Footer'

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
            </main>
        </>
    )
}
