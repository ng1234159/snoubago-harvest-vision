
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Login from '../components/Login';
import Map from '../components/Map';
import Analytics from '../components/Analytics';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Database, Plus, Search, Download, MapPin, LogOut, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const HarvestData = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [editingProfit, setEditingProfit] = useState<string | null>(null);

  // Sample data with profit calculations
  const [harvestData, setHarvestData] = useState([
    {
      zone: "north",
      landNumber: "001",
      landSize: 2500,
      treeCount: 45,
      pineconeYield: 125.5,
      pineFruitYield: 87.2,
      harvestTime: "08:00 - 14:30",
      profit: 1250.75,
      operationalCosts: 450.0
    },
    {
      zone: "south",
      landNumber: "002", 
      landSize: 3200,
      treeCount: 62,
      pineconeYield: 168.3,
      pineFruitYield: 112.7,
      harvestTime: "07:30 - 15:00",
      profit: 1680.50,
      operationalCosts: 580.0
    },
    {
      zone: "east",
      landNumber: "003",
      landSize: 1800,
      treeCount: 33,
      pineconeYield: 89.4,
      pineFruitYield: 61.8,
      harvestTime: "09:00 - 13:45",
      profit: 894.25,
      operationalCosts: 320.0
    }
  ]);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowMap(false);
  };

  const handleProfitEdit = (landNumber: string, newProfit: number) => {
    setHarvestData(prev => prev.map(item => 
      item.landNumber === landNumber 
        ? { ...item, profit: newProfit }
        : item
    ));
    setEditingProfit(null);
  };

  // Calculate totals for KPIs
  const totals = harvestData.reduce(
    (acc, item) => ({
      pineconeYield: acc.pineconeYield + item.pineconeYield,
      pineFruitYield: acc.pineFruitYield + item.pineFruitYield,
      profit: acc.profit + item.profit,
      trees: acc.trees + item.treeCount,
      landSize: acc.landSize + item.landSize
    }),
    { pineconeYield: 0, pineFruitYield: 0, profit: 0, trees: 0, landSize: 0 }
  );

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Database className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Harvest Data Analytics
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Real-time data from our drone-assisted pine harvesting operations across all zones
            </p>
            <div className="mt-6">
              <Button 
                onClick={handleLogout}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-800"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="data" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="data">Harvest Data</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="data" className="space-y-8">
            {/* Controls Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="h-4 w-4" />
                    Add New Entry
                  </button>
                  <button 
                    onClick={() => setShowMap(!showMap)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    {showMap ? 'Hide Map' : 'View Map'}
                  </button>
                </div>
                
                <div className="flex gap-3">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search zones, land #..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    <Download className="h-4 w-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            {showMap && (
              <div className="mb-8">
                <Map />
              </div>
            )}

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Harvest Records</h2>
                <p className="text-gray-600 mt-1">Comprehensive data from all harvesting operations</p>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zone</TableHead>
                      <TableHead>Land #</TableHead>
                      <TableHead>Land (m²)</TableHead>
                      <TableHead># of Trees</TableHead>
                      <TableHead>Pinecone Yield (kg)</TableHead>
                      <TableHead>Pine Fruit Yield (kg)</TableHead>
                      <TableHead>Harvest Time</TableHead>
                      <TableHead>Profit (USD)</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {harvestData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.zone}</TableCell>
                        <TableCell>{row.landNumber}</TableCell>
                        <TableCell>{row.landSize.toLocaleString()}</TableCell>
                        <TableCell>{row.treeCount}</TableCell>
                        <TableCell>{row.pineconeYield}</TableCell>
                        <TableCell>{row.pineFruitYield}</TableCell>
                        <TableCell>{row.harvestTime}</TableCell>
                        <TableCell>
                          {editingProfit === row.landNumber ? (
                            <Input
                              type="number"
                              defaultValue={row.profit}
                              onBlur={(e) => handleProfitEdit(row.landNumber, parseFloat(e.target.value) || 0)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleProfitEdit(row.landNumber, parseFloat(e.currentTarget.value) || 0);
                                }
                              }}
                              className="w-24"
                            />
                          ) : (
                            <div 
                              className="flex items-center gap-1 cursor-pointer hover:bg-gray-50 p-1 rounded"
                              onClick={() => setEditingProfit(row.landNumber)}
                            >
                              <DollarSign className="h-3 w-3 text-green-600" />
                              <span>${row.profit.toFixed(2)}</span>
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pinecone Yield</h3>
                <p className="text-3xl font-bold text-green-600">{totals.pineconeYield.toFixed(1)} kg</p>
                <p className="text-sm text-gray-600 mt-1">Across all zones</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pine Fruit Yield</h3>
                <p className="text-3xl font-bold text-green-600">{totals.pineFruitYield.toFixed(1)} kg</p>
                <p className="text-sm text-gray-600 mt-1">Across all zones</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Profit</h3>
                <p className="text-3xl font-bold text-green-600">${totals.profit.toFixed(2)}</p>
                <p className="text-sm text-gray-600 mt-1">This season</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Trees Harvested</h3>
                <p className="text-3xl font-bold text-green-600">{totals.trees}</p>
                <p className="text-sm text-gray-600 mt-1">From {harvestData.length} zones</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Analytics harvestData={harvestData} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HarvestData;
