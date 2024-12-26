'use client'

import { useState } from 'react'
import { Search, Filter, MoreVertical, Edit, Trash, Plus } from 'lucide-react'
import Link from 'next/link'

export default function MyAds() {
  const [activeTab, setActiveTab] = useState('active')
  const [ads, setAds] = useState([])

  const deleteAd = (id) => {
    setAds(ads.filter(ad => ad.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold">My Ads</h1>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <div className="relative flex-grow sm:flex-grow-0">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search ads..."
              className="w-full rounded-lg border border-gray-200 pl-10 pr-4 py-2 focus:border-[#9DD5E3] focus:outline-none sm:w-64"
            />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <Link
            href="/dashboard/add-ad"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-4 py-2 text-white hover:bg-[#8bc5d3] transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            Add New Ad
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <div className="flex space-x-8">
          {['active', 'pending', 'expired'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border-b-2 px-1 py-4 text-sm font-medium capitalize whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? 'border-[#9DD5E3] text-[#9DD5E3]'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Ads Grid or Empty State */}
      {ads.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{ad.title}</h3>
                    <p className="text-sm text-gray-500">{ad.category}</p>
                  </div>
                  <div className="relative">
                    <button className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-200">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#FF9EAA]">
                    {ad.price}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/dashboard/edit-ad/${ad.id}`} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200">
                      <Edit className="h-5 w-5" />
                    </Link>
                    <button onClick={() => deleteAd(ad.id)} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 transition-colors duration-200">
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="rounded-full bg-[#9DD5E3]/10 p-3">
            <Plus className="h-8 w-8 text-[#9DD5E3]" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">No Ads Yet</h2>
          <p className="mt-2 text-center text-gray-500">
            Get started by creating your first ad. It's easy and only takes a few minutes!
          </p>
          <Link
            href="/dashboard/add-ad"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#9DD5E3] px-6 py-3 font-medium text-white hover:bg-[#8bc5d3] transition-colors duration-200"
          >
            <Plus className="h-5 w-5" />
            Create Your First Ad
          </Link>
        </div>
      )}
    </div>
  )
}

