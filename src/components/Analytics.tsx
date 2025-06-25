
import React, { useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Download, Filter, TrendingUp, DollarSign, TreePine, BarChart3 } from 'lucide-react';

interface HarvestItem {
  zone: string;
  landNumber: string;
  landSize: number;
  treeCount: number;
  pineconeYield: number;
  pineFruitYield: number;
  harvestTime: string;
  profit: number;
  operationalCosts: number;
}

interface AnalyticsProps {
  harvestData: HarvestItem[];
}

const Analytics = ({ harvestData }: AnalyticsProps) => {
  const [selectedMetric, setSelectedMetric] = useState('total');
  const [selectedZone, setSelectedZone] = useState('all');

  // Calculate KPIs
  const totals = harvestData.reduce(
    (acc, item) => ({
      pineconeYield: acc.pineconeYield + item.pineconeYield,
      pineFruitYield: acc.pineFruitYield + item.pineFruitYield,
      profit: acc.profit + item.profit,
      trees: acc.trees + item.treeCount,
      landSize: acc.landSize + item.landSize,
      operationalCosts: acc.operationalCosts + item.operationalCosts
    }),
    { pineconeYield: 0, pineFruitYield: 0, profit: 0, trees: 0, landSize: 0, operationalCosts: 0 }
  );

  const avgYieldPerTree = totals.trees > 0 ? (totals.pineconeYield + totals.pineFruitYield) / totals.trees : 0;
  const avgYieldPerM2 = totals.landSize > 0 ? (totals.pineconeYield + totals.pineFruitYield) / totals.landSize : 0;

  // Prepare chart data
  const zoneData = harvestData.map(item => ({
    zone: item.zone,
    pineconeYield: item.pineconeYield,
    pineFruitYield: item.pineFruitYield,
    totalYield: item.pineconeYield + item.pineFruitYield,
    profit: item.profit,
    yieldPerM2: (item.pineconeYield + item.pineFruitYield) / item.landSize
  }));

  const profitBreakdown = [
    { name: 'Revenue', value: totals.profit + totals.operationalCosts, color: '#16a34a' },
    { name: 'Operational Costs', value: totals.operationalCosts, color: '#dc2626' },
    { name: 'Net Profit', value: totals.profit, color: '#059669' }
  ];

  // Mock time series data
  const timeSeriesData = [
    { month: 'Jan', pinecone: 45, fruit: 32, predicted: 42 },
    { month: 'Feb', pinecone: 52, fruit: 38, predicted: 48 },
    { month: 'Mar', pinecone: 61, fruit: 45, predicted: 55 },
    { month: 'Apr', pinecone: 58, fruit: 42, predicted: 52 },
    { month: 'May', pinecone: 68, fruit: 48, predicted: 58 },
    { month: 'Jun', pinecone: 75, fruit: 53, predicted: 65 }
  ];

  const chartConfig = {
    pinecone: {
      label: 'Pinecone Yield',
      color: '#16a34a',
    },
    fruit: {
      label: 'Pine Fruit Yield',
      color: '#22c55e',
    },
    predicted: {
      label: 'AI Predicted',
      color: '#94a3b8',
    },
    profit: {
      label: 'Profit',
      color: '#059669',
    },
  };

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="font-medium">Filters:</span>
          </div>
          <div className="flex gap-4">
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="total">Total Yield</SelectItem>
                <SelectItem value="pinecone">Pinecone Only</SelectItem>
                <SelectItem value="fruit">Pine Fruit Only</SelectItem>
                <SelectItem value="profit">Profit Focus</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedZone} onValueChange={setSelectedZone}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Zones</SelectItem>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Pinecone Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{totals.pineconeYield.toFixed(1)} kg</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Pine Fruit Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{totals.pineFruitYield.toFixed(1)} kg</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${totals.profit.toFixed(2)}</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <DollarSign className="h-3 w-3 mr-1" />
              Net after costs
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Yield per Tree</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{avgYieldPerTree.toFixed(2)} kg</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <TreePine className="h-3 w-3 mr-1" />
              Combined yield
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Yield per m²</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{avgYieldPerM2.toFixed(4)} kg</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <BarChart3 className="h-3 w-3 mr-1" />
              Land efficiency
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Harvests This Season</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{harvestData.length}</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              Active zones
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Line Chart: Yield Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Yield Trends & AI Forecast</CardTitle>
            <CardDescription>Pinecone & fruit yield over time with AI predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="pinecone" stroke="#16a34a" strokeWidth={2} name="Pinecone Yield" />
                <Line type="monotone" dataKey="fruit" stroke="#22c55e" strokeWidth={2} name="Pine Fruit Yield" />
                <Line type="monotone" dataKey="predicted" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="AI Predicted" />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Bar Chart: Yield per Zone */}
        <Card>
          <CardHeader>
            <CardTitle>Yield by Zone</CardTitle>
            <CardDescription>Comparative analysis across harvest zones</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <BarChart data={zoneData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="zone" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="pineconeYield" fill="#16a34a" name="Pinecone Yield" />
                <Bar dataKey="pineFruitYield" fill="#22c55e" name="Pine Fruit Yield" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart: Profit Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Profit Breakdown</CardTitle>
            <CardDescription>Revenue vs operational costs analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <PieChart>
                <Pie
                  data={profitBreakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
                >
                  {profitBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Heatmap Table */}
        <Card>
          <CardHeader>
            <CardTitle>Yield Efficiency Heatmap</CardTitle>
            <CardDescription>Yield per m² across zones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {zoneData.map((zone, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg" 
                     style={{ backgroundColor: `rgba(34, 197, 94, ${zone.yieldPerM2 * 20})` }}>
                  <div className="font-medium">{zone.zone.toUpperCase()} Zone</div>
                  <div className="text-sm">
                    <span className="font-bold">{zone.yieldPerM2.toFixed(4)} kg/m²</span>
                    <span className="text-gray-600 ml-2">({zone.totalYield.toFixed(1)} kg total)</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar/Gantt View Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Harvest Schedule Overview</CardTitle>
          <CardDescription>Harvest windows across all lands</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {harvestData.map((item, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="font-semibold text-green-800">{item.zone.toUpperCase()} - Land {item.landNumber}</div>
                <div className="text-sm text-green-600 mt-1">{item.harvestTime}</div>
                <div className="text-xs text-gray-600 mt-2">
                  {item.treeCount} trees • ${item.profit.toFixed(2)} profit
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
