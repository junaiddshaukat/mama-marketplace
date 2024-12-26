'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [contactInfoComplete, setContactInfoComplete] = useState(true)

  useEffect(() => {
    // Check if contact information is complete (this is a mock check)
    // In a real application, this would be fetched from an API or local storage
    setContactInfoComplete(false)
  }, [])

  const stats = [
    {
      title: 'Total Ads',
      value: '24',
      icon: '👥',
      color: 'bg-[#FF9EAA]',
    },
    {
      title: 'Active Ads',
      value: '12',
      icon: '📈',
      color: 'bg-[#9DD5E3]',
    },
    {
      title: 'Favorites',
      value: '8',
      icon: '⭐',
      color: 'bg-[#FF9EAA]',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John Doe!</p>
      </div>

      {/* Contact Information Alert */}
      {!contactInfoComplete && (
        <div className="rounded-lg bg-yellow-100 p-4 text-yellow-700">
          <h3 className="font-semibold">Complete Your Contact Information</h3>
          <p className="mt-1">
            Please add your contact information to create ads and improve your profile visibility.
          </p>
          <Link
            href="/dashboard/contact"
            className="mt-2 inline-block font-medium text-yellow-700 underline"
          >
            Add Contact Information
          </Link>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-lg bg-white p-6 shadow-sm"
          >
            <div className="flex items-center">
              <div className={`rounded-full ${stat.color} p-3 text-white`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Completion Alert */}
      {/* <div className="rounded-lg bg-[#FFF9E7] p-4">
        <div className="flex items-center">
          <span className="mr-3 text-2xl">⚠️</span>
          <div>
            <h3 className="font-semibold">Complete Your Profile</h3>
            <p className="text-sm text-gray-600">
              Add more information to improve your profile visibility and get more responses to your ads.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

