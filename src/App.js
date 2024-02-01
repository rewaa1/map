// App.js
import React from 'react';
import GoogleMapComponent from './GoogleMapComponent';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Google Maps App</h1>
        <div className="w-full h-96">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
