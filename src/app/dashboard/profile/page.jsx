'use client'

import { Camera } from 'lucide-react'

export default function EditProfile() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Profile</h1>

      <form className="space-y-6">
        {/* Profile Picture */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Profile Picture</h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-[#9DD5E3]">
                <div className="flex h-full items-center justify-center text-3xl text-white">
                  JD
                </div>
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-white p-2 shadow-md hover:bg-gray-50">
                <Camera className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <div>
              <h3 className="font-medium">Profile Picture</h3>
              <p className="text-sm text-gray-500">
                Upload a new profile picture or remove the current one
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                defaultValue="johndoe123"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="+1 (555) 987-6543"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Change Password</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:border-[#9DD5E3] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-[#9DD5E3] px-6 py-2 font-medium text-white hover:bg-[#8bc5d3]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

