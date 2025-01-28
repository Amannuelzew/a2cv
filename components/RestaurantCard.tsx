//import Image from "next/image"

import { cn } from "@/lib/utils"

export interface RestaurantCardProps {
  name: string
  rating: number
  image: string
  category: string
  status: string
}

export function RestaurantCard({ name, rating, image, category,status }: RestaurantCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border shadow">
      {/* <Image
        src={}
        alt={name}
        width={300}
        height={200}
        className="h-48 w-full object-cover"
      ,/> */}
<div className="w-[300px] h-[300px] bg-gray-700"></div>
      <div className="p-">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">★ {rating}</span>
        </div>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className={`text-sm font-medium ${status === "Open" ? "text-green-600" : "text-red-600"}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    </div>
  )
}

