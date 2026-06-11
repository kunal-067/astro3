'use client'
import React, { useState } from 'react'
import {SectionBadge, SectionHeading, Section} from "@/components/ui";
import {GALLERY_ITEMS} from "@/lib/data"
const GallerySection = () => {
  const [galleryModal, setGalleryModal] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  return (
    <>
     <Section id="gallery">
        <div className="text-center mb-14">
          <SectionBadge>Gallery</SectionBadge>
          <SectionHeading title="Sacred Moments & Ceremonies" subtitle="A glimpse into the spiritual world of Acharya Ji." />
        </div>
        {/* Desktop masonry */}
        <div className="hidden md:columns-3 gap-5 md:block">
          {GALLERY_ITEMS.map((g, i) => (
            <button
              key={i}
              onClick={() => { setGalleryModal(true); setGalleryIdx(i); }}
              className="block w-full mb-5 rounded-2xl overflow-hidden cursor-pointer group card-hover border border-white/10 hover:border-pink-400/30 transition-colors"
            >
              <div className={`bg-linear-to-br ${g.bg} relative overflow-hidden ${g.aspect === "tall" ? "h-72" : g.aspect === "wide" ? "h-40" : "h-52"}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white/80 text-xs font-medium">{g.label}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {GALLERY_ITEMS.map((g, i) => (
            <div key={i} className={`shrink-0 w-64 h-48 rounded-2xl bg-linear-to-br ${g.bg} snap-center`} />
          ))}
        </div>
      </Section>

<GallerySection galleryIdx={galleryIdx} galleryModal={galleryModal} setGalleryIdx={setGalleryIdx} setGalleryModal={setGalleryModal}/>
      </>
  )
}

export default GallerySection