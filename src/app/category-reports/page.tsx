import PageLayout from "@/components/layout/page-layout"
import { CalendarIcon, DownloadIcon, BarChartIcon, LineChartIcon, SearchIcon } from "lucide-react"

export default function CategoryReportsPage() {
  // Sample data for categories table
  const categoriesData = [
    { 
      category: "Fast Foods",
      itemsSold: 9,
      price: "$16.36",
      products: 3,
      orders: 1
    },
    { 
      category: "Salads",
      itemsSold: 1,
      price: "$17.20",
      products: 2,
      orders: 1
    },
    { 
      category: "Hot dishes",
      itemsSold: 1,
      price: "$17.20",
      products: 2,
      orders: 1
    }
  ]

  return (
    <PageLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header with date selector */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Category reports</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-md p-2 bg-white">
              <span className="text-sm mr-2">2025-03-30</span>
              <CalendarIcon className="h-4 w-4 text-gray-500" />
              <span className="mx-2">→</span>
              <span className="text-sm mr-2">2025-04-30</span>
              <CalendarIcon className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Item sold</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Net sales</div>
            <div className="text-2xl font-bold">$ 0.00</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Orders</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Order products</div>
            <div className="text-2xl font-bold">0</div>
          </div>
        </div>
        
        {/* Chart Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-lg">Item sold</h2>
            
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border rounded-md bg-white hover:bg-gray-50">Day</button>
              <div className="flex border rounded-md overflow-hidden">
                <button className="p-1 bg-white hover:bg-gray-50 border-r">
                  <BarChartIcon className="h-4 w-4" />
                </button>
                <button className="p-1 bg-white hover:bg-gray-50">
                  <LineChartIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="h-60 flex items-center justify-center border-t border-b py-4">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                {/* Empty chart state */}
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span>No Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Categories Table Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-lg">Categories</h2>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-8 pr-4 py-1 border rounded-md text-sm"
                />
                <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button className="flex items-center space-x-1 text-sm border rounded-md px-3 py-1 bg-white">
                <DownloadIcon className="h-4 w-4" />
                <span>Download</span>
              </button>
              <div className="flex border rounded-md overflow-hidden">
                <button className="p-1 bg-white hover:bg-gray-50 border-r">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="w-10 px-4 py-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Category</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Item sold</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Products</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Orders</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesData.length > 0 ? (
                    categoriesData.map((category, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        </td>
                        <td className="px-4 py-3 text-sm">{category.category}</td>
                        <td className="px-4 py-3 text-sm">{category.itemsSold}</td>
                        <td className="px-4 py-3 text-sm">{category.price}</td>
                        <td className="px-4 py-3 text-sm">{category.products}</td>
                        <td className="px-4 py-3 text-sm">{category.orders}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-t">
                      <td colSpan={6} className="px-4 py-12 text-center text-gray-500">
                        No Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="text-sm text-center text-gray-500 mb-6">
          <span>Restroman UK support team </span>
          <a href="#" className="text-blue-500">123456789</a>
        </div>
      </div>
    </PageLayout>
  )
} 