import PageLayout from "@/components/layout/page-layout"
import { CalendarIcon, DownloadIcon, BarChartIcon, LineChartIcon } from "lucide-react"

export default function RevenueReportsPage() {
  // Sample data for revenue table
  const revenueData = [
    { date: "2025-04-29", itemsSold: 0, orders: 0, shipping: "$ 0.00", returns: "$ 61.17", netSales: "$ 0.00", tax: "$ 0.00" },
    { date: "2025-04-27", itemsSold: 0, orders: 0, shipping: "$ 0.00", returns: "$ 370.78", netSales: "$ 0.00", tax: "$ 0.00" },
    { date: "2025-04-24", itemsSold: 0, orders: 0, shipping: "$ 0.00", returns: "$ 13.01", netSales: "$ 0.00", tax: "$ 0.00" },
    { date: "2025-04-21", itemsSold: 2, orders: 1, shipping: "$ 0.00", returns: "$ 13,937.61", netSales: "$ 17.20", tax: "$ 0.00" },
    { date: "2025-04-19", itemsSold: 9, orders: 1, shipping: "$ 0.00", returns: "$ 0.00", netSales: "$ 16.36", tax: "$ 0.00" }
  ]

  return (
    <PageLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header with date selector */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Revenue Reports</h1>
          
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
            <div className="text-sm text-gray-500 mb-2">Total sales</div>
            <div className="text-2xl font-bold">11</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Net sales</div>
            <div className="text-2xl font-bold">$ 33.56</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">Average order price</div>
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
                <div className="absolute bottom-0 right-0 w-full h-1/6 bg-blue-500 opacity-75"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>2025-04-19</span>
              <span>2025-04-21</span>
              <span>2025-04-24</span>
              <span>2025-04-27</span>
              <span>2025-04-29</span>
            </div>
          </div>
        </div>
        
        {/* Revenue Table Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-lg">Revenue</h2>
            
            <button className="flex items-center space-x-1 px-3 py-1 text-sm border rounded-md bg-white hover:bg-gray-50">
              <DownloadIcon className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Item sold</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Orders</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Shipping</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Returns</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Net sales</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Tax</th>
                  </tr>
                </thead>
                <tbody>
                  {revenueData.map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3 text-sm">{row.date}</td>
                      <td className="px-4 py-3 text-sm">{row.itemsSold}</td>
                      <td className="px-4 py-3 text-sm">{row.orders}</td>
                      <td className="px-4 py-3 text-sm">{row.shipping}</td>
                      <td className="px-4 py-3 text-sm">{row.returns}</td>
                      <td className="px-4 py-3 text-sm">{row.netSales}</td>
                      <td className="px-4 py-3 text-sm">{row.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-2 border-t text-center">
              <button className="p-1 rounded-full bg-blue-500 text-white">
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