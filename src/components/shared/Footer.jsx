import React from 'react'

const Footer = () => {
    return (
        <footer className="py-10 px-4 border-t border-gray-200/50 dark:border-white/10 bg-white dark:bg-[#0a0318]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
                    <span className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji</span>
                </div>
                <p className="text-xs text-gray-400 text-center">
                    © 2024 Acharya Ji · London, United Kingdom · All consultations are private and confidential.
                </p>
                <div className="flex gap-4 text-xs text-gray-400">
                    <a href="#" className="hover:text-pink-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Terms</a>
                    <a href="#" className="hover:text-pink-500 transition-colors">Contact</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer