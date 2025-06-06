import PageLayout from "@/components/layout/page-layout"
import { DownloadIcon, SearchIcon } from "lucide-react"

export default function StockReportsPage() {
  // Sample data for stock table
  const stockData = [
    { 
      title: "Matcha Latte",
      barcode: "-",
      status: "Pending",
      stock: "225"
    },
    { 
      title: "test",
      barcode: "-",
      status: "Pending",
      stock: "0"
    },
    { 
      title: "Chilli Cheese Hot Dog",
      barcode: "-",
      status: "Published",
      stock: "9999969"
    },
    { 
      title: "California-style Pizza",
      barcode: "-",
      status: "Published",
      stock: "29999992"
    },
    { 
      title: "French Dip Sandwich",
      barcode: "-",
      status: "Published",
      stock: "999998"
    },
    { 
      title: "Chilli Cheese Hot Dog",
      barcode: "-",
      status: "Published",
      stock: "9999973"
    },
    { 
      title: "California-style Pizza",
      barcode: "-",
      status: "Published",
      stock: "29999966"
    },
    { 
      title: "Cobb Salad",
      barcode: "-",
      status: "Published",
      stock: "2201988"
    },
    { 
      title: "California Roll",
      barcode: "-",
      status: "Published",
      stock: "10019970"
    },
    { 
      title: "French Dip Sandwich",
      barcode: "-",
      status: "Published",
      stock: "999998"
    }
  ]

  return (
    <PageLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Stock</h1>
        </div>
        
        {/* Stock Table Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div></div>
            
            <div className="flex items-center space-x-2">
              <div className="flex border rounded-md px-3 py-1 text-sm items-center space-x-1 bg-white">
                <span>All products</span>
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
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Product title</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Barcode</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {stockData.map((product, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-3 text-sm">{product.title}</td>
                      <td className="px-4 py-3 text-sm">{product.barcode}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.status === "Published" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-2 border-t flex justify-between items-center">
              <div className="text-sm text-gray-500">
                10 / page
              </div>
              <div className="flex space-x-1">
                <button className="p-1 rounded-full bg-blue-500 text-white w-6 h-6 flex items-center justify-center">
                  <span>1</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>2</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>3</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>4</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>5</span>
                </button>
                <span className="p-1 text-gray-500 w-6 h-6 flex items-center justify-center">...</span>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>50</span>
                </button>
                <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700 w-6 h-6 flex items-center justify-center">
                  <span>→</span>
                </button>
              </div>
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