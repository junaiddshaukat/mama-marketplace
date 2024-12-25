'use client'

import Image from 'next/image'
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative mx-auto mt-10 mb-8 overflow-hidden rounded-2xl bg-[#FFB5C7]">
      <div className="flex min-h-[300px] flex-col items-center justify-center p-6 md:min-h-[300px] md:p-8">
        {/* Vector Image - Left Side */}
        <div className="absolute left-0 top-[70%] hidden w-1/3 -translate-y-1/2 transform md:block">
          <Image
            src="https://res.cloudinary.com/junaidshaukat/image/upload/v1735066530/Untitled_design_1_eqfguu.png"
            alt="Mother and child illustration"
            width={500}
            height={500}
            className="object-contain bg-transparent"
          />
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Für deinen kleinen Schatz 
          </h1>
          <div className="flex w-full max-w-xl flex-col gap-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Produkt suchen..."
                className="w-full rounded-full border-0 p-4 pl-6 pr-12 shadow-lg focus:ring-2 focus:ring-[#ff9fb8]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#E6F0FF] p-2 text-[#FFB5C7] transition hover:bg-[#d9e7ff]">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

