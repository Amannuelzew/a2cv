"use client"

import { Search } from "lucide-react"


export function Hero() {
  return (
    <div className="relative bg-[#FFA500] px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Are you starving?</h1>
            <p className="mb-6 text-white ">within a few clicks,find meals that are accessible near you</p>
            <div className="relative">
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <div className="flex gap-4">
                  <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm placeholder:text-muted-foreground" placeholder="What do you like to eat today?" />
                  <button className="bg-primary text-primary-foreground shadow hover:bg-primary/90">
                    <Search className="mr-2 h-4 w-4" />
                    Find Food
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">          
          </div>
        </div>
      </div>
    </div>
  )
}

