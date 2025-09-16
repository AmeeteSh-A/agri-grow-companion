import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SensorCard from '@/components/SensorCard';
import { currentReadings, generateMockData, insightsLog, weatherForecast } from '@/data/mockData';
import { 
  ArrowLeft,
  Droplets, 
  Thermometer, 
  Gauge, 
  Wind,
  Cloud,
  CloudRain,
  Sun,
  Activity,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DetailedAnalysis = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  
  const weeklyData = generateMockData(7);
  const chartData = weeklyData.slice(-24).map((reading, index) => ({
    time: `${index}h`,
    soilMoisture: reading.soilMoisture,
    temperature: reading.temperature,
    humidity: reading.humidity,
    co2: reading.co2,
  }));

  const getSoilHealthScore = () => 72;
  const getHealthStatus = (score: number) => {
    if (score >= 70) return { status: 'Excellent', color: 'success' };
    if (score >= 50) return { status: 'Good', color: 'primary' };
    if (score >= 30) return { status: 'Fair', color: 'warning' };
    return { status: 'Poor', color: 'destructive' };
  };

  const healthStatus = getHealthStatus(getSoilHealthScore());

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <div className="bg-white border-b border-border/40 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="border-border/60 hover:border-primary/60"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Detailed Analysis</h1>
                <p className="text-muted-foreground mt-1">Comprehensive soil & crop monitoring</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Last Updated</p>
              <p className="font-semibold text-foreground">{new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Real-time Stats */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Real-time Sensor Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SensorCard 
              label="Soil Moisture"
              value={currentReadings.soilMoisture.toString()}
              unit="%"
              trend="stable"
              trendValue="+2%"
              icon={<Droplets className="w-5 h-5" />}
            />
            <SensorCard 
              label="Temperature"
              value={currentReadings.temperature.toString()}
              unit="°C"
              trend="up"
              trendValue="+1.5°C"
              icon={<Thermometer className="w-5 h-5" />}
            />
            <SensorCard 
              label="Humidity"
              value={currentReadings.humidity.toString()}
              unit="%"
              trend="down"
              trendValue="-3%"
              icon={<Gauge className="w-5 h-5" />}
            />
            <SensorCard 
              label="CO₂ Level"
              value={currentReadings.co2.toString()}
              unit="ppm"
              trend="stable"
              trendValue="+5 ppm"
              icon={<Wind className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* Weather & Soil Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cloud className="w-5 h-5 text-primary" />
                <span>Weather Forecast</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <CloudRain className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Rain Forecast</p>
                  <p className="font-semibold text-foreground">{weatherForecast.rainForecast}</p>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <Sun className="w-8 h-8 text-warning mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="font-semibold text-foreground">{weatherForecast.temperatureForecast}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wind Speed:</span>
                  <span className="font-medium">{weatherForecast.windSpeed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Humidity:</span>
                  <span className="font-medium">{weatherForecast.humidity}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>Soil Health Report</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-primary">
                  {getSoilHealthScore()}
                </div>
                <Badge 
                  variant="secondary" 
                  className={`px-4 py-2 text-sm font-semibold ${
                    healthStatus.color === 'success' ? 'bg-success/10 text-success' :
                    healthStatus.color === 'warning' ? 'bg-warning/10 text-warning' :
                    healthStatus.color === 'destructive' ? 'bg-destructive/10 text-destructive' :
                    'bg-primary/10 text-primary'
                  }`}
                >
                  {healthStatus.status}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Based on soil moisture, temperature, and environmental factors
                </p>
                <div className="w-full bg-muted rounded-full h-3 mt-4">
                  <div 
                    className="bg-primary h-3 rounded-full transition-smooth" 
                    style={{ width: `${getSoilHealthScore()}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Sensor Trends (Last 24 Hours)</h2>
            <div className="flex space-x-2">
              {['24h', '7d', '30d'].map((timeframe) => (
                <Button
                  key={timeframe}
                  variant={selectedTimeframe === timeframe ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className="text-xs"
                >
                  {timeframe}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Soil Moisture & Temperature</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="soilMoisture" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      name="Soil Moisture (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="hsl(var(--warning))" 
                      strokeWidth={3}
                      name="Temperature (°C)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Humidity & CO₂ Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="humidity" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      name="Humidity (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="co2" 
                      stroke="hsl(var(--success))" 
                      strokeWidth={3}
                      name="CO₂ (ppm)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Full Insights Log */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Complete Insights Log</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {insightsLog.map((insight) => (
                <div key={insight.id} className="flex items-start space-x-4 p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-smooth">
                  <div className="flex-shrink-0 mt-1">
                    {insight.type === 'alert' ? (
                      <AlertCircle className="w-5 h-5 text-warning" />
                    ) : insight.type === 'action' ? (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-success" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground font-medium">{insight.insight}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(insight.date).toLocaleString()}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      insight.type === 'alert' ? 'border-warning/50 text-warning' :
                      insight.type === 'action' ? 'border-primary/50 text-primary' :
                      'border-success/50 text-success'
                    }`}
                  >
                    {insight.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetailedAnalysis;