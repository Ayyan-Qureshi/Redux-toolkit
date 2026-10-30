"use client";

import React from "react";

export default function AuthBanner() {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-[#FAFAFA] p-8 relative overflow-hidden border-l border-gray-100 min-h-screen">
      
      <div className="text-center space-y-1.5 mb-16 max-w-sm">
        <h2 className="text-[22px] font-bold text-gray-900 tracking-tight">
          Select &amp; Combine &amp; Integrate.
        </h2>
        <p className="text-[12px] text-gray-400 font-normal">
          Develop and refine AI models using our intuitive interface.
        </p>
      </div>

      <div className="relative w-[340px] h-[340px] flex items-center justify-center">
        
        <svg className="absolute inset-0 w-full h-full stroke-gray-200" strokeWidth="1" strokeDasharray="3 3">
          <line x1="45" y1="45" x2="295" y2="295" />
          <line x1="295" y1="45" x2="45" y2="295" />
          <line x1="170" y1="45" x2="170" y2="295" />
          <line x1="45" y1="170" x2="295" y2="170" />
          <rect x="45" y="45" width="250" height="250" fill="none" />
        </svg>

        {/* Center Main Icon */}
        <div className="absolute z-10 w-[54px] h-[54px] bg-[#111625] rounded-[18px] flex items-center justify-center text-white shadow-xl">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </div>

        {/* Top-Left: Meta AI Official Infinity Logo */}
        <div className="absolute top-[21px] left-[21px] w-[48px] h-[48px] bg-white border border-gray-100 rounded-[14px] flex items-center justify-center shadow-sm">
          <svg className="w-6 h-6 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.2 6c-1.8 0-3.3 1-4.2 2.3C11.1 7 9.6 6 7.8 6 4.6 6 2 8.7 2 12s2.6 6 5.8 6c1.8 0 3.3-1 4.2-2.3 0.9 1.3 2.4 2.3 4.2 2.3 3.2 0 5.8-2.7 5.8-6S19.4 6 16.2 6zm-8.4 9.6c-1.9 0-3.4-1.6-3.4-3.6s1.5-3.6 3.4-3.6c1.2 0 2.3 0.7 2.9 1.7-0.6 1.1-1.7 1.8-2.9 1.8zm8.4 0c-1.2 0-2.3-0.7-2.9-1.8 0.6-1 1.7-1.7 2.9-1.7 1.9 0 3.4 1.6 3.4 3.6s-1.5 3.6-3.4 3.6z"/>
          </svg>
        </div>

        {/* Top-Center: Runway Icon */}
        <div className="absolute top-[21px] w-[48px] h-[48px] bg-black rounded-[14px] flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M5 4h14v3H5V4zm0 6h14v3H5v-3zm0 6h10v3H5v-3z"/>
          </svg>
        </div>

        {/* Top-Right: ElevenLabs Badge */}
        <div className="absolute top-[21px] right-[21px] w-[48px] h-[48px] bg-white border border-gray-100 rounded-[14px] flex items-center justify-center shadow-sm text-[8px] font-bold text-gray-900 leading-tight text-center">
          Eleven<br/>Labs
        </div>

        {/* Middle-Left: Cursor / Circle Swirl Logo */}
        <div className="absolute left-[21px] w-[48px] h-[48px] bg-black rounded-[14px] flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="7" />
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>

        {/* Middle-Right: Replicate / F Icon */}
        <div className="absolute right-[21px] w-[48px] h-[48px] bg-black rounded-[14px] flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M4 4h16v3H7v4h11v3H7v6H4V4z"/>
          </svg>
        </div>

        {/* Bottom-Left: ChatGPT Swirl Logo */}
        <div className="absolute bottom-[21px] left-[21px] w-[48px] h-[48px] bg-white border border-gray-100 rounded-[14px] flex items-center justify-center shadow-sm">
          <svg className="w-6 h-6 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-4.66-2.08 6.06 6.06 0 0 0-5.77 4.22 6.01 6.01 0 0 0-4.14 3 6.07 6.07 0 0 0 .75 7.11 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.51 2.9 6.06 6.06 0 0 0 4.66 2.08 6.06 6.06 0 0 0 5.77-4.22 6.01 6.01 0 0 0 4.14-3 6.07 6.07 0 0 0-.75-7.11zm-9.22 10.51a4.27 4.27 0 0 1-2.58-.87l.15-.08 4.27-2.47a.89.89 0 0 0 .45-.77v-6.03l1.81 1.05a.1.1 0 0 1 .05.08v5.52a4.28 4.28 0 0 1-4.15 3.57zm-8.08-3.83a4.25 4.25 0 0 1-.53-2.67l.15.09 4.27 2.47a.89.89 0 0 0 .89 0l5.22-3.02v2.1a.1.1 0 0 1-.04.09l-4.78 2.76a4.29 4.29 0 0 1-5.18-.82zm-1.12-8.98a4.27 4.27 0 0 1 2.05-1.81l-.01.17v4.93a.89.89 0 0 0 .44.77l5.22 3.01-1.81 1.05a.1.1 0 0 1-.1 0l-4.78-2.76a4.29 4.29 0 0 1-1.01-5.36zm14.47 2.76l-5.22-3.01 1.81-1.05a.1.1 0 0 1 .1 0l4.78 2.76a4.29 4.29 0 0 1 1.01 5.36 4.27 4.27 0 0 1-2.05 1.81l.01-.17v-4.93a.89.89 0 0 0-.44-.77zm2.25-3.35l-.15-.09-4.27-2.47a.89.89 0 0 0-.89 0l-5.22 3.02v-2.1a.1.1 0 0 1 .04-.09l4.78-2.76a4.29 4.29 0 0 1 5.71 4.49zm-10.42-3.41a4.28 4.28 0 0 1 2.58.87l-.15.08-4.27 2.47a.89.89 0 0 0-.45.77v6.03l-1.81-1.05a.1.1 0 0 1-.05-.08v-5.52a4.28 4.28 0 0 1 4.15-3.57z"/>
          </svg>
        </div>

        {/* Bottom-Center: Cube Icon */}
        <div className="absolute bottom-[21px] w-[48px] h-[48px] bg-black rounded-[14px] flex items-center justify-center text-white shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>

        {/* Bottom-Right: Wave Icon */}
        <div className="absolute bottom-[21px] right-[21px] w-[48px] h-[48px] bg-white border border-gray-100 rounded-[14px] flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M4 12c4-8 12 8 16 0"/>
          </svg>
        </div>

      </div>

    </div>
  );
}