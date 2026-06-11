import FAQSection from '@/components/sections/FAQSection'
import TextTestimonials from '@/components/sections/TextTestimonials'
import React from 'react'
import FinalCTA from '@/components/sections/FinalCTA';
import PageHero from '@/components/pages/PageHero'
import { WA_LINK } from '@/lib/constants';
import {
    HeartHandshake,
    Search,
    Sparkles,
    RefreshCw,
    Heart,
    Gem,
    ShieldCheck,
    Brain,
    Plane,
    Baby,
    HeartPulse,
    Briefcase,
    Home
} from "lucide-react";
import { HowGurujiSolvesIt } from '@/components/pages/HowGurujiSolve';
import { ProblemsSolvedSection } from '@/components/pages/ProblemSolve';


export const reviews = [
    {
        name: "Priya S.",
        city: "London",
        text: "Acharya Ji reunited me with my partner after 2 years of separation. Pure miracle!",
        stars: 5,
    },
    {
        name: "Anita K.",
        city: "Birmingham",
        text: "My marriage was on the verge of divorce. After consulting Acharya Ji, everything changed.",
        stars: 5,
    },
    {
        name: "Sunita R.",
        city: "Manchester",
        text: "100% genuine. My ex came back within 3 weeks exactly as Acharya Ji promised.",
        stars: 5,
    },
    {
        name: "Meera P.",
        city: "Leicester",
        text: "I was sceptical at first but the results were beyond my expectations. Highly recommend.",
        stars: 5,
    },
    {
        name: "Kavita D.",
        city: "Leeds",
        text: "I had almost lost hope in my relationship. Acharya Ji gave me clarity and confidence.",
        stars: 5,
    },
    {
        name: "Reena T.",
        city: "Glasgow",
        text: "Very discreet and professional. My family problems started improving within weeks.",
        stars: 5,
    },
    {
        name: "Pooja M.",
        city: "Bristol",
        text: "Acharya Ji's guidance on my marriage was incredibly accurate. We are now much happier together.",
        stars: 5,
    },
    {
        name: "Deepa V.",
        city: "Coventry",
        text: "Amazing experience. He understood my problem immediately and provided practical guidance.",
        stars: 5,
    },
];

export const faqs = [
    {
        q: "Can Acharya Ji really help bring my ex back?",
        a: "Acharya Ji provides relationship guidance, spiritual consultation, and personalised remedies based on Vedic principles. Every situation is unique, and during your consultation he will honestly assess your case and recommend the most suitable path forward.",
    },
    {
        q: "Is my consultation completely private?",
        a: "Yes. All consultations are handled with complete confidentiality. Your personal details, relationship concerns, and discussions remain strictly private.",
    },
    {
        q: "How does a WhatsApp consultation work?",
        a: "Simply send a WhatsApp message explaining your situation. You may communicate through text, voice notes, or calls, and Guruji will provide personalised guidance based on your circumstances.",
    },
    {
        q: "How long does it take to see positive changes?",
        a: "The timeline varies depending on the complexity of the situation. Some clients notice improvements quickly, while others require more time and consistent guidance. Guruji will provide realistic expectations during your consultation.",
    },
    {
        q: "Do you help with intercultural or interfaith relationships?",
        a: "Yes. Guruji has guided clients from many cultural, religious, and family backgrounds. Relationship challenges involving different traditions and expectations are common consultation topics.",
    },
    {
        q: "Is there a consultation fee?",
        a: "The initial consultation is completely free. This allows Guruji to understand your situation and explain how he may be able to help before any further commitment.",
    },
];


const LoveBackPage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-[#0f0524] text-gray-900 dark:text-white font-sans overflow-x-hidden transition-colors duration-500">
            <PageHero
                badge="❤️ LOVE BACK SPECIALIST"
                liveBadge="Online Now · Free Love Consultation"

                breadcrumb="Love Back Solution"

                headLine1="Get Your"
                headLineShimmer="Lost Love Back"
                headLine2="With Expert Guidance"

                sub="Struggling with a breakup, separation, misunderstanding, one-sided love, or relationship conflicts? Speak directly with Acharya Guruji and receive confidential guidance tailored to your situation."

                badges={[
                    {
                        icon: <Heart className="h-4 w-4 text-pink-500" />,
                        text: "Love Back Guidance",
                    },
                    {
                        icon: <Gem className="h-4 w-4 text-violet-500" />,
                        text: "Marriage Problems",
                    },
                    {
                        icon: <Sparkles className="h-4 w-4 text-amber-500" />,
                        text: "Relationship Expert",
                    },
                    {
                        icon: <ShieldCheck className="h-4 w-4 text-green-500" />,
                        text: "100% Private",
                    },
                ]}

                waLink={WA_LINK}

                ctaLabel="Get Love Solution Now"

                secondaryHref="#how-it-works"
                secondaryLabel="How It Works"

                statCards={[
                    {
                        value: "10,000+",
                        label: "Consultations",
                    },
                    {
                        value: "15+",
                        label: "Years Experience",
                    },
                ]}

                avatarInitials={["A", "S", "R", "K", "P", "M"]}

                proofText="Trusted by 10,000+ clients worldwide"

                placeholderEmoji="❤️"

                wheelColor1="#ff4fa1"
                wheelColor2="#9333ea"
            />

            <HowGurujiSolvesIt
                eyebrow="Love Back Process"
                heading="How Guruji Helps"
                headingShimmer="Rebuild Relationships"
                sub="Every relationship has a unique story. Guruji carefully studies your situation, identifies the root causes of separation, and provides personalized guidance to help restore harmony, trust, and emotional connection."

                steps={[
                    {
                        icon: <Search className="h-6 w-6" />,
                        title: "Relationship Analysis",
                        body: "Guruji carefully understands your relationship history, current challenges, misunderstandings, communication gaps, and emotional concerns.",
                        chip: "Step 1",
                    },
                    {
                        icon: <HeartHandshake className="h-6 w-6" />,
                        title: "Root Cause Discovery",
                        body: "Many relationship problems arise from emotional wounds, trust issues, family pressures, or timing conflicts. Guruji identifies the real cause behind the situation.",
                        chip: "Step 2",
                    },
                    {
                        icon: <Sparkles className="h-6 w-6" />,
                        title: "Personalized Guidance",
                        body: "Receive practical relationship advice, spiritual guidance, positive affirmations, and customized remedies based on your unique circumstances.",
                        chip: "Step 3",
                    },
                    {
                        icon: <RefreshCw className="h-6 w-6" />,
                        title: "Continuous Support",
                        body: "Relationships evolve over time. Guruji remains available to guide you through changing situations and provide ongoing support whenever needed.",
                        chip: "Step 4",
                    },
                ]}

                ctaLabel="Talk To Guruji Now"

                waLink={WA_LINK}

                wheelColor1="#ff7b54"
                wheelColor2="#7c3aed"
            />

            <ProblemsSolvedSection
                eyebrow="Specialisations"
                heading="Problems"
                headingShimmer="We Resolve"
                sub="From stubborn career blocks to family disputes — Guruji has guided thousands through every kind of life challenge."
                problems={[
                    {
                        icon: <Heart />,
                        title: "Love & Marriage",
                        body: "Delayed marriage, compatibility clashes, separation, remarriage guidance.",
                    },
                    {
                        icon: <Briefcase />,
                        title: "Career & Business",
                        body: "Job loss, promotion blocks, business failure, financial stagnation.",
                    },
                    {
                        icon: <Home />,
                        title: "Property & Legal",
                        body: "Land disputes, court cases, property stuck in limbo.",
                    },
                    {
                        icon: <Baby />,
                        title: "Children & Fertility",
                        body: "Conception difficulties, child health, education struggles.",
                    },
                    {
                        icon: <Sparkles />,
                        title: "Black Magic & Vastu",
                        body: "Negative energies, evil eye, home or workplace Vastu doshas.",
                    },
                    {
                        icon: <HeartPulse />,
                        title: "Health & Longevity",
                        body: "Chronic illness patterns rooted in planetary afflictions.",
                    },
                    {
                        icon: <Plane />,
                        title: "Foreign Settlement",
                        body: "Visa delays, overseas career, migration timing.",
                    },
                    {
                        icon: <Brain />,
                        title: "Mental Peace",
                        body: "Anxiety, recurring nightmares, unexplained fears — often karmic in origin.",
                    },
                ]}
                wheelColor1="#ff4fa1"
                wheelColor2="#d946ef"
            />

            <TextTestimonials reviews={reviews} />

            <FAQSection faqs={faqs} />

            <FinalCTA />
        </div>
    );
};

export default LoveBackPage;