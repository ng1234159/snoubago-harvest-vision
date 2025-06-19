
import React from 'react';
import Navigation from '../components/Navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Database, Plus, Search, Download, MapPin } from 'lucide-react';

const HarvestData = () => {
  // Sample data for demonstration
  const harvestData = [
    {
      zone: "manta2a-north",
      landNumber: "001",
      landSize: 2500,
      treeCount: 45,
      pineconeYield: 125.5,
      pineFruitYield: 87.2,
      harvestTime: "08:00 - 14:30"
    },
    {
      zone: "manta2a-south",
      landNumber: "002", 
      landSize: 3200,
      treeCount: 62,
      pineconeYield: 168.3,
      pineFruitYield: 112.7,
      harvestTime: "07:30 - 15:00"
    },
    {
      zone: "manta2a-east",
      landNumber: "003",
      landSize: 1800,
      treeCount: 33,
      pineconeYield: 89.4,
      pineFruitYield: 61.8,
      harvestTime: "09:00 - 13:45"
    }
  ];

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
          </div>
        </div>
      </div>

      {/* Controls Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Plus className="h-4 w-4" />
                Add New Entry
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MapPin className="h-4 w-4" />
                View Map
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
                  <TableHead>Zone (manta2a)</TableHead>
                  <TableHead>Land #</TableHead>
                  <TableHead>Land (m²)</TableHead>
                  <TableHead># of Trees</TableHead>
                  <TableHead>Pinecone Yield (kg)</TableHead>
                  <TableHead>Pine Fruit Yield (kg)</TableHead>
                  <TableHead>Harvest Time</TableHead>
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
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pinecone Yield</h3>
            <p className="text-3xl font-bold text-green-600">383.2 kg</p>
            <p className="text-sm text-gray-600 mt-1">Across all zones</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pine Fruit Yield</h3>
            <p className="text-3xl font-bold text-green-600">261.7 kg</p>
            <p className="text-sm text-gray-600 mt-1">Across all zones</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Trees Harvested</h3>
            <p className="text-3xl font-bold text-green-600">140</p>
            <p className="text-sm text-gray-600 mt-1">From 3 zones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestData;
