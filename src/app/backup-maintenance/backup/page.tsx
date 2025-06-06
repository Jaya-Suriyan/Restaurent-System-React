"use client"
import React from 'react'
import PageLayout from "@/components/layout/page-layout"
import { Download, AlertTriangle } from 'lucide-react'

function BackupPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Backup</h1>
        </div>

        {/* Warning Message */}
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <AlertTriangle className="w-16 h-16 text-amber-400" />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-2">Do you care about your data?</h2>
          <p className="text-gray-600 mb-6">Here you can take backup from database.</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Download backup
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  ID
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Client
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Title
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Created at
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  2
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Owner Githubit
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  /backup_2025-04-24-07-47-13.zip
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  24-04-2025 13:17
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    <Download size={16} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  1
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Owner Githubit
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  /backup_2023-05-04-09-09-26.zip
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  04-05-2023 13:39
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    <Download size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Restroman UK support team <a href="tel:123456789" className="text-blue-500">123456789</a></p>
        </div>
      </div>
    </PageLayout>
  )
}

export default BackupPage 