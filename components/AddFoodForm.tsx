"use client"

import { useState, type FormEvent } from "react"

interface FormData {
  foodName: string
  foodRating: string
  foodImage: string
  restaurantName: string
  restaurantLogo: string
  restaurantStatus: string
}

interface FormErrors {
  foodName?: string
  foodRating?: string
  foodImage?: string
  restaurantName?: string
  restaurantLogo?: string
}

export function AddFoodForm() {
  const [formData, setFormData] = useState<FormData>({
    foodName: "",
    foodRating: "",
    foodImage: "",
    restaurantName: "",
    restaurantLogo: "",
    restaurantStatus: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Food Name validation
    if (!formData.foodName.trim()) {
      newErrors.foodName = "Food Name is required"
      isValid = false
    }

    // Food Rating validation
    if (!formData.foodRating.trim()) {
      newErrors.foodRating = "Food Rating must be a number"
      isValid = false
    } else if (
      isNaN(Number(formData.foodRating)) ||
      Number(formData.foodRating) < 0 ||
      Number(formData.foodRating) > 5
    ) {
      newErrors.foodRating = "Food Rating must be a number between 0 and 5"
      isValid = false
    }

    // Food Image validation
    if (!formData.foodImage.trim()) {
      newErrors.foodImage = "Food Image URL is required"
      isValid = false
    }

    // Restaurant Name validation
    if (!formData.restaurantName.trim()) {
      newErrors.restaurantName = "Restaurant Name is required"
      isValid = false
    }

    // Restaurant Logo validation
    if (!formData.restaurantLogo.trim()) {
      newErrors.restaurantLogo = "Restaurant Logo URL is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Handle form submission
    }
  }

  const handleCancel = () => {
    setFormData({
      foodName: "",
      foodRating: "",
      foodImage: "",
      restaurantName: "",
      restaurantLogo: "",
      restaurantStatus: "",
    })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Food name"
              value={formData.foodName}
              onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
              className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
                errors.foodName ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.foodName && <p className="text-red-500 text-sm">{errors.foodName}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Food rating"
              value={formData.foodRating}
              onChange={(e) => setFormData({ ...formData, foodRating: e.target.value })}
              className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
                errors.foodRating ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.foodRating && <p className="text-red-500 text-sm">{errors.foodRating}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Food image (link)"
              value={formData.foodImage}
              onChange={(e) => setFormData({ ...formData, foodImage: e.target.value })}
              className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
                errors.foodImage ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.foodImage && <p className="text-red-500 text-sm">{errors.foodImage}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Restaurant name"
              value={formData.restaurantName}
              onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
              className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
                errors.restaurantName ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.restaurantName && <p className="text-red-500 text-sm">{errors.restaurantName}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="text"
              placeholder="Restaurant logo (link)"
              value={formData.restaurantLogo}
              onChange={(e) => setFormData({ ...formData, restaurantLogo: e.target.value })}
              className={`w-full px-4 py-2 rounded-md bg-gray-50 border ${
                errors.restaurantLogo ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:border-orange-500`}
            />
            {errors.restaurantLogo && <p className="text-red-500 text-sm">{errors.restaurantLogo}</p>}
          </div>

          <input
            type="text"
            placeholder="Restaurant status (open/close)"
            value={formData.restaurantStatus}
            onChange={(e) => setFormData({ ...formData, restaurantStatus: e.target.value })}
            className="w-full px-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-500"
          />

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Save food
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

