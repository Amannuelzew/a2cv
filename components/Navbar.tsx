import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-orange-500">
              FoodDelivery
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-orange-500 ">
              Home
            </Link>
            <Link
              href="/create"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 "
            >
              Add Food
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

