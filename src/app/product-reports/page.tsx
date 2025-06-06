import PageLayout from "@/components/layout/page-layout"
import { CalendarIcon, DownloadIcon, BarChartIcon, LineChartIcon, SearchIcon } from "lucide-react"

export default function ProductReportsPage() {
  // Sample data for products table
  const productsData = [
    { 
      title: "Chilli Cheese Hot Dog",
      barcode: "-",
      itemsSold: 9,
      netSales: "$ 32.72",
      orders: 1,
      category: "Fast Foods",
      status: "Active"
    },
    { 
      title: "Cobb Salad",
      barcode: "-",
      itemsSold: 1,
      netSales: "$ 17.20",
      orders: 1,
      category: "Salads",
      status: "Active"
    },
    { 
      title: "California Roll",
      barcode: "-",
      itemsSold: 1,
      netSales: "$ 17.20",
      orders: 1,
      category: "Hot dishes",
      status: "Active"
    }
  ]

  return (
    <PageLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header with date selector */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Product Reports</h1>
          
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
            <div className="text-2xl font-bold">11</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Net sales</div>
            <div className="text-2xl font-bold">$ 33.56</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">avg.order.price</div>
            <div className="text-2xl font-bold">$ 0.00</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Orders</div>
            <div className="text-2xl font-bold">2</div>
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
              <div className="w-full h-full bg-gradient-to-t from-blue-100 to-blue-50 relative">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                    <path 
                      d="M0,200 L0,100 C200,20 400,20 600,60 C800,100 1000,0 1000,0 L1000,200 Z" 
                      fill="#3b82f6" 
                      fillOpacity="0.3"
                    />
                    <path 
                      d="M0,100 C200,20 400,20 600,60 C800,100 1000,0 1000,0" 
                      stroke="#3b82f6" 
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>2025-04-19</span>
              <span>2025-04-21</span>
            </div>
          </div>
        </div>
        
        {/* Products Table Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-lg">Products</h2>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-8 pr-4 py-1 border rounded-md text-sm"
                />
                <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button className="flex border rounded-md px-3 py-1 text-sm items-center space-x-1 bg-white">
                <span>Select restaurant</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button className="flex border rounded-md px-2 py-1 items-center">
                <span>Clear</span>
              </button>
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
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Product title</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Barcode</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Item sold</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Net sales</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Orders</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Category</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map((product, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3 text-sm">{product.title}</td>
                      <td className="px-4 py-3 text-sm">{product.barcode}</td>
                      <td className="px-4 py-3 text-sm">{product.itemsSold}</td>
                      <td className="px-4 py-3 text-sm">{product.netSales}</td>
                      <td className="px-4 py-3 text-sm">{product.orders}</td>
                      <td className="px-4 py-3 text-sm">{product.category}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {product.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-2 border-t text-center">
              <button className="p-1 rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">
                <span>1</span>
              </button>
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