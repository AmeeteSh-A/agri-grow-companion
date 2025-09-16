// Mock data for AgriSense dashboard

export interface SensorReading {
  timestamp: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
  co2: number;
}

export interface InsightEntry {
  id: string;
  date: string;
  insight: string;
  type: 'action' | 'alert' | 'info';
}

// Generate mock sensor readings for the last 7 days
export const generateMockData = (days: number = 7): SensorReading[] => {
  const data: SensorReading[] = [];
  const now = new Date();

  for (let i = days * 24; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000);
    data.push({
      timestamp: timestamp.toISOString(),
      soilMoisture: Math.floor(Math.random() * 30) + 35, // 35-65%
      temperature: Math.floor(Math.random() * 15) + 25, // 25-40°C
      humidity: Math.floor(Math.random() * 20) + 60, // 60-80%
      co2: Math.floor(Math.random() * 100) + 380, // 380-480 ppm
    });
  }

  return data;
};

// Current sensor readings
export const currentReadings = {
  soilMoisture: 45,
  temperature: 32,
  humidity: 70,
  co2: 420,
  lastUpdated: new Date().toISOString(),
};

// Mock insights log
export const insightsLog: InsightEntry[] = [
  {
    id: '1',
    date: '2025-09-16 14:30:00',
    insight: 'Soil moisture optimal after morning irrigation',
    type: 'info',
  },
  {
    id: '2',
    date: '2025-09-16 10:00:00',
    insight: 'Automated irrigation system activated',
    type: 'action',
  },
  {
    id: '3',
    date: '2025-09-15 18:45:00',
    insight: 'Temperature rising - monitor crop stress indicators',
    type: 'alert',
  },
  {
    id: '4',
    date: '2025-09-15 09:30:00',
    insight: 'Rain forecasted - irrigation postponed',
    type: 'info',
  },
  {
    id: '5',
    date: '2025-09-14 16:20:00',
    insight: 'CO₂ levels optimal for plant growth',
    type: 'info',
  },
  {
    id: '6',
    date: '2025-09-14 11:15:00',
    insight: 'Humidity levels ideal for current crop stage',
    type: 'info',
  },
  {
    id: '7',
    date: '2025-09-13 15:00:00',
    insight: 'Soil moisture below threshold - irrigation recommended',
    type: 'alert',
  },
  {
    id: '8',
    date: '2025-09-13 08:30:00',
    insight: 'Morning temperature optimal for plant activity',
    type: 'info',
  },
];

// Weather forecast mock data
export const weatherForecast = {
  rainForecast: 'Light rain expected',
  temperatureForecast: '28-35°C',
  windSpeed: '8 km/h',
  humidity: '75%',
  lastUpdated: new Date().toISOString(),
};

// Team members data
export const teamMembers = [
  { 
    name: 'Arjun Patel', 
    role: 'Hardware Lead',
    description: 'IoT sensors & device integration',
    email: 'arjun.patel@teamvirentus.in',
    github: 'github.com/arjunpatel',
    linkedin: 'linkedin.com/in/arjunpatel'
  },
  { 
    name: 'Priya Sharma', 
    role: 'Backend Lead',
    description: 'API development & cloud architecture',
    email: 'priya.sharma@teamvirentus.in',
    github: 'github.com/priyasharma',
    linkedin: 'linkedin.com/in/priyasharma'
  },
  { 
    name: 'Rohan Kumar', 
    role: 'Frontend Lead',
    description: 'UI/UX design & React development',
    email: 'rohan.kumar@teamvirentus.in',
    github: 'github.com/rohankumar',
    linkedin: 'linkedin.com/in/rohankumar'
  },
  { 
    name: 'Sneha Singh', 
    role: 'ML Lead',
    description: 'Machine learning & data analytics',
    email: 'sneha.singh@teamvirentus.in',
    github: 'github.com/snehasingh',
    linkedin: 'linkedin.com/in/snehasingh'
  },
  { 
    name: 'Vikram Gupta', 
    role: 'Integration Lead',
    description: 'System integration & testing',
    email: 'vikram.gupta@teamvirentus.in',
    github: 'github.com/vikramgupta',
    linkedin: 'linkedin.com/in/vikramgupta'
  },
  { 
    name: 'Ananya Reddy', 
    role: 'DevOps Lead',
    description: 'Deployment & infrastructure management',
    email: 'ananya.reddy@teamvirentus.in',
    github: 'github.com/ananyareddy',
    linkedin: 'linkedin.com/in/ananyareddy'
  },
];

// Device information
export const deviceInfo = {
  id: 'Field Device #101',
  location: 'Field A - North Sector',
  status: 'online',
  lastSync: new Date().toISOString(),
  batteryLevel: 85,
};