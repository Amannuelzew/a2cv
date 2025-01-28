import { RestaurantCard } from "./RestaurantCard"

export function FeaturedRestaurants() {
  const restaurants = [
    {
      name: "Best Lasagna",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      category: "Italian",
      status:"Open"
    },
    {
      name: "Natural Avocado Smoothie",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      category: "Drinks",
      status:"Open"
    },
    {
      name: "Pancake",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      category: "Breakfast",
      status:"Open"
    },
    {
      name: "Cupcake",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      category: "Desserts",
      status:"Open"
    },
    {
      name: "Best Lasagna",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
      category: "Italian",
      status:"Open"
    },
    {
      name: "Natural Avocado Smoothie",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=200",
      category: "Drinks",
      status:"closed"
    },
    {
      name: "Pancake",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=200",
      category: "Breakfast",
      status:"closed"
    },
    {
      name: "Cupcake",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
      category: "Desserts",
      status:"Open"
    },
  ]

  return (
    <section className="px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold">Featured Restaurants</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
      <div className="flex text-center justify-center m-4">
      <button className="p-1 rounded-md  bg-orange-500 hover:bg-orange-600 text-primary-foreground shadow hover:bg-primary/90">Load More &gt; </button>
      </div>
    </section>
  )
}

