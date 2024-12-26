'use client'

import { useState } from 'react'

export default function ContactInformation() {
  const [formData, setFormData] = useState({
    email: 'you@example.com',
    phone: '+1 (555) 987-6543',
    address: '123 Main St, City, State, ZIP',
    location: 'New York, NY',
    website: 'https://www.example.com',
  })

  const [visibility, setVisibility] = useState({
    email: 'public',
    phone: 'public',
    location: 'public',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Contact Information</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {/* Email */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="flex items-center gap-4">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              <select
                value={visibility.email}
                onChange={(e) =>
                  setVisibility({ ...visibility, email: e.target.value })
                }
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex items-center gap-4">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              <select
                value={visibility.phone}
                onChange={(e) =>
                  setVisibility({ ...visibility, phone: e.target.value })
                }
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
              <select
                value={visibility.location}
                onChange={(e) =>
                  setVisibility({ ...visibility, location: e.target.value })
                }
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
            />
          </div>

          {/* Website */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Website (Optional)
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 text-white hover:bg-[#8bc5d3]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

