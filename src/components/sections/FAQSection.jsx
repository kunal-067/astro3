"use client"
import React, {useState} from 'react';
import { SectionBadge, SectionHeading } from "../ui"
import { FAQS } from "@/lib/data"

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-gray-900 dark:text-white pr-4">{q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-sm transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-white/10">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}


const FAQSection = ({faqs = FAQS}) => {
    return (
        <div id="faq" className="py-20 px-4 bg-gray-50 dark:bg-white/2 border-y border-gray-200/50 dark:border-white/5">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <SectionBadge>FAQ</SectionBadge>
                    <SectionHeading title="Questions & Answers" subtitle="Everything you need to know before reaching out." />
                </div>
                {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
        </div>
    )
}

export default FAQSection