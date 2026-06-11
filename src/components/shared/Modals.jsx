'use client'
import { useEffect, useState } from "react";
import { GALLERY_ITEMS } from "@/lib/data";

export function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-950 border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
  // const [videoIdx, setVideoIdx] = useState(0);
export function ReviewModal(){
const [reviewModal, setReviewModal] = useState(null);

  return(
     <Modal open={!!reviewModal} onClose={() => setReviewModal(null)}>
        {reviewModal && (
          <div className="p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {reviewModal.name[0]}
              </div>
              <div>
                <p className="text-lg font-bold text-white">{reviewModal.name}</p>
                <p className="text-gray-400 text-sm">{reviewModal.city}, UK</p>
                <Stars count={reviewModal.stars} />
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-gray-200 leading-relaxed text-base italic">"{reviewModal.text}"</p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">Verified client review</p>
          </div>
        )}
      </Modal>
  )
}

export function VideoModal({videoModal, setVideoModal}){
  return(
 <Modal open={!!videoModal} onClose={() => setVideoModal(null)}>
        {videoModal && (
          <div>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${videoModal.id}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={videoModal.title}
              />
            </div>
            <div className="p-5">
              <p className="text-white font-semibold">{videoModal.title}</p>
            </div>
          </div>
        )}
      </Modal>
  )
}

export function GalleryModal({galleryModal, setGalleryModal, galleryIdx, setGalleryIdx}){
  
  return(
    <Modal open={!!galleryModal} onClose={() => setGalleryModal(null)}>
        <div className="relative">
          <div className={`aspect-video bg-linear-to-br ${GALLERY_ITEMS[galleryIdx]?.bg} flex items-center justify-center`}>
            <p className="text-white/70 font-semibold" style={{ fontFamily: "var(--font-display)" }}>{GALLERY_ITEMS[galleryIdx]?.label}</p>
          </div>
          <div className="flex justify-between absolute inset-y-0 left-0 right-0 items-center px-4 pointer-events-none">
            {galleryIdx > 0 && (
              <button onClick={e => { e.stopPropagation(); setGalleryIdx(i => i - 1); }} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors pointer-events-auto">
                ‹
              </button>
            )}
            <div />
            {galleryIdx < GALLERY_ITEMS.length - 1 && (
              <button onClick={e => { e.stopPropagation(); setGalleryIdx(i => i + 1); }} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors pointer-events-auto">
                ›
              </button>
            )}
          </div>
          <div className="p-4 flex justify-center gap-2">
            {GALLERY_ITEMS.map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setGalleryIdx(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === galleryIdx ? "bg-pink-400 w-5" : "bg-white/30"}`} />
            ))}
          </div>
        </div>
      </Modal>
  )
}