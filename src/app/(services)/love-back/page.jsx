import PageHero from '@/components/pages/PageHero'
import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import React from 'react'
import { Stars, Avatar, Pill, Reveal, Modal, WAButton, WAIcon } from "@/components/ui";
import FinalCTA from '@/components/sections/FinalCTA';


const LoveBackPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0524] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
            <PageHero />
            <TextTestimonials />

            <FAQSection />
<FinalCTA/>
        </div>
    )
}


export default LoveBackPage