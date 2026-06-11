'use client'
import React, { useState } from 'react'
import { Section, SectionBadge, SectionHeading } from "../ui";
import { VIDEOS } from "@/lib/data";
import { VideoModal } from '../shared/Modals';

const VideoTestimonials = () => {
  const [videoModal, setVideoModal] = useState(null);
  const [videoIdx, setVideoIdx] = useState(null);
  return (
    <>
      <Section id="videos">
        <div className="text-center mb-6 md:mb-14">
          <SectionBadge>Video Proof</SectionBadge>
          <SectionHeading title="Hear It From Real Clients" subtitle="Watch genuine video testimonials from clients whose lives Acharya Ji transformed." />
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                onClick={() => { setVideoModal(v); setVideoIdx(i); }}
                className="group relative rounded-2xl overflow-hidden aspect-video card-hover cursor-pointer border border-white/10 hover:border-pink-400/40 transition-colors"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                  alt={v.title}
                  className="h-full object-cover"
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-pink-900/80 to-purple-900/80 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-white text-xs text-center px-4 font-medium leading-snug">{v.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      <VideoModal videoModal={videoModal} setVideoModal={setVideoModal}/>
    </>
  )
}

export default VideoTestimonials