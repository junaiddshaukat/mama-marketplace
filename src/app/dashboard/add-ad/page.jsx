'use client'

import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AddAd() {
  const router = useRouter()
  const [contactInfoMissing, setContactInfoMissing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Check if contact information is complete (this is a mock check)
    const contactInfoComplete = false // This should be replaced with actual check

    if (!contactInfoComplete) {
      setContactInfoMissing(true)
      return
    }

    // Process form submission
    // ...

    // Redirect to My Ads page
    router.push('/dashboard/my-ads')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Add New Ad</h1>

      {contactInfoMissing && (
        <div className="rounded-lg bg-red-100 p-4 text-red-700">
          <p>Please complete your contact information before creating an ad.</p>
          <a href="/dashboard/contact" className="mt-2 inline-block font-medium text-red-700 underline">
            Go to Contact Information
          </a>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          {/* Basic Information */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Basic Information</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none transition-colors duration-200"
                  placeholder="Enter ad title"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select 
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none transition-colors duration-200"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="electronics">Electronics</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none transition-colors duration-200"
                  placeholder="Enter location"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 pl-8 focus:border-[#9DD5E3] focus:outline-none transition-colors duration-200"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none transition-colors duration-200"
                  placeholder="Describe your ad"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="mt-8 space-y-6">
            <h2 className="text-lg font-semibold">Images</h2>
            
            <div className="grid gap-4 md:grid-cols-3">
              {/* Upload Box */}
              <div className="relative flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-200 hover:border-[#9DD5E3] transition-colors duration-200">
                <input
                  type="file"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  multiple
                />
                <div className="text-center">
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Upload Image</p>
                </div>
              </div>

              {/* Preview Box */}
              <div className="relative aspect-square rounded-lg bg-gray-100 overflow-hidden group">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Preview"
                  className="h-full w-full rounded-lg object-cover"
                />
                <button className="absolute right-2 top-2 rounded-full bg-white/80 p-1.5 text-gray-500 hover:bg-white transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 font-medium text-white hover:bg-[#8bc5d3] transition-colors duration-200"
          >
            Post Ad
          </button>
        </div>
      </form>
    </div>
  )
}

