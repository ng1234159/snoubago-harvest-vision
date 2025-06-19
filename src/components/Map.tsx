
import React from 'react';
import { MapPin, TreePine } from 'lucide-react';

const Map = () => {
  // Lebanon-specific zones with real approximate coordinates
  const zones = [
    { id: 1, name: 'North Zone', x: 45, y: 25, lands: 3, region: 'Tripoli Area' },
    { id: 2, name: 'South Zone', x: 35, y: 75, lands: 2, region: 'Sidon Area' },
    { id: 3, name: 'East Zone', x: 70, y: 40, lands: 4, region: 'Bekaa Valley' },
    { id: 4, name: 'West Zone', x: 25, y: 50, lands: 2, region: 'Coastal Area' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Lebanon - Harvest Zone Locations</h2>
      <div className="relative bg-gradient-to-br from-green-50 via-amber-50 to-green-100 rounded-lg h-96 overflow-hidden border-2 border-green-200">
        {/* Lebanon map outline simulation */}
        <div className="absolute inset-0">
          {/* Mountain ranges representation */}
          <div className="absolute top-8 left-1/4 w-1/2 h-8 bg-green-300 opacity-30 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-16 left-1/3 w-2/5 h-6 bg-green-400 opacity-25 rounded-full transform -rotate-6"></div>
          
          {/* Coastal line representation */}
          <div className="absolute left-0 top-0 w-2 h-full bg-blue-200 opacity-40 rounded-r-full"></div>
          
          {/* Country outline approximation */}
          <div className="absolute inset-4 border-2 border-amber-200 opacity-50 rounded-lg transform rotate-2"></div>
        </div>
        
        {/* Zone markers - Pinged locations */}
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          >
            <div className="relative">
              {/* Pulsing animation for "pinged" effect */}
              <div className="absolute inset-0 rounded-full bg-red-400 opacity-75 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-red-300 opacity-50 animate-pulse"></div>
              
              {/* Main pin */}
              <MapPin className="h-8 w-8 text-red-600 drop-shadow-lg group-hover:text-red-700 transition-colors relative z-10" />
              <TreePine className="h-4 w-4 text-green-800 absolute top-1 left-2 z-10" />
            </div>
            
            {/* Enhanced tooltip with region info */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap shadow-lg">
                <div className="font-semibold">{zone.name}</div>
                <div className="text-gray-300">{zone.region}</div>
                <div className="text-green-300">{zone.lands} harvest lands</div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        ))}
        
        {/* Enhanced Legend */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-95 rounded-lg p-4 shadow-lg border border-gray-200">
          <h4 className="font-semibold text-sm text-gray-800 mb-3">Lebanon Harvest Zones</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-3 h-3 bg-red-400 rounded-full opacity-75 animate-pulse"></div>
              </div>
              <span className="text-xs text-gray-700">Active Harvest Zone</span>
            </div>
            <div className="flex items-center space-x-2">
              <TreePine className="h-3 w-3 text-green-600" />
              <span className="text-xs text-gray-700">Pine Forest Area</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-200 text-xs text-gray-600">
            Total: {zones.reduce((sum, zone) => sum + zone.lands, 0)} harvest lands
          </div>
        </div>
        
        {/* Lebanon country label */}
        <div className="absolute top-4 left-4 bg-amber-100 bg-opacity-90 rounded-lg px-3 py-2 shadow-md">
          <h3 className="font-bold text-amber-800 text-sm">🇱🇧 Lebanon</h3>
          <p className="text-xs text-amber-700">Pine Harvest Operations</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
