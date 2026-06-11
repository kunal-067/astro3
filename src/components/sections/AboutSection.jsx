import React from 'react'
import {SectionBadge, Section} from "../ui"

export const AboutSection = () => {
  return (
     <Section id="about">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative aspect-4/5 max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="w-full h-full bg-linear-to-br from-pink-900 via-purple-900 to-violet-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🌟</div>
                  <p className="text-white/70 font-semibold" style={{ fontFamily: "var(--font-display)" }}>Acharya Ji Profile</p>
                </div>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              {[{ n: "25+", l: "Years" }, { n: "5K+", l: "Clients" }, { n: "98%", l: "Success" }].map((s, i) => (
                <div key={i} className="glass dark:glass border border-white/10 rounded-2xl px-5 py-3 text-center shadow-xl">
                  <p className="text-xl font-bold text-shimmer">{s.n}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <SectionBadge>About</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Meet{" "}<span className="text-shimmer">Acharya Ji</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              With over <strong className="text-gray-900 dark:text-white">25 years of spiritual practice</strong> rooted in ancient Vedic traditions, Acharya Ji has become the UK's most sought-after love and relationship healer. His work bridges timeless wisdom with modern emotional realities.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Having served clients from London to Glasgow, Birmingham to Bristol, Acharya Ji has resolved thousands of seemingly impossible situations — from reuniting separated lovers to saving marriages on the verge of collapse.
            </p>

            {/* Timeline */}
            <div className="space-y-5">
              {[
                { year: "1999", event: "Began Vedic spiritual practice under renowned Himalayan masters" },
                { year: "2005", event: "Established practice in London, serving the UK South Asian community" },
                { year: "2015", event: "Helped 1,000+ clients rebuild love and relationships" },
                { year: "2024", event: "Over 5,000 successful cases across the United Kingdom" },
              ].map((t, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="shrink-0 w-16 h-8 rounded-full bg-linear-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center">
                    <span className="text-pink-500 dark:text-pink-300 text-xs font-bold">{t.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 pt-1 leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
  )
}

export default AboutSection