
import React from 'react';
import { MapPin, TreePine } from 'lucide-react';

const Map = () => {
  const zones = [
    { id: 1, name: 'North Zone', x: 25, y: 20, lands: 3 },
    { id: 2, name: 'South Zone', x: 45, y: 60, lands: 2 },
    { id: 3, name: 'East Zone', x: 70, y: 35, lands: 4 },
    { id: 4, name: 'West Zone', x: 15, y: 50, lands: 2 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Zone Map View</h2>
      <div className="relative bg-green-50 rounded-lg h-96 overflow-hidden border-2 border-green-100">
        {/* Background pattern to simulate terrain */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-green-200 via-green-100 to-green-300"></div>
        </div>
        
        {/* Zone markers */}
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          >
            <div className="relative">
              <MapPin className="h-8 w-8 text-green-600 drop-shadow-lg group-hover:text-green-700 transition-colors" />
              <TreePine className="h-4 w-4 text-green-800 absolute top-1 left-2" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                {zone.name}
                <br />
                {zone.lands} lands
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        ))}
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-md">
          <h4 className="font-semibold text-sm text-gray-800 mb-2">Legend</h4>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-green-600" />
            <span className="text-xs text-gray-700">Harvest Zone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
