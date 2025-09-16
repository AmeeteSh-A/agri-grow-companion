import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusCard from '@/components/StatusCard';
import SensorCard from '@/components/SensorCard';
import { currentReadings, insightsLog, deviceInfo } from '@/data/mockData';
import { 
  Droplets, 
  Thermometer, 
  Gauge, 
  Wind,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const getSoilHealthStatus = (moisture: number) => {
    if (moisture >= 40) return 'good';
    if (moisture >= 25) return 'moderate';
    return 'bad';
  };

  const getSoilHealthText = (moisture: number) => {
    if (moisture >= 40) return 'Good';
    if (moisture >= 25) return 'Moderate';
    return 'Poor';
  };

  const getIrrigationNeeded = (moisture: number) => {
    return moisture < 40;
  };

  const recentInsights = insightsLog.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <div className="bg-white border-b border-border/40 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">AgriSense Dashboard</h1>
              <p className="text-muted-foreground mt-1">Real-time field monitoring system</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Device ID</p>
              <p className="font-semibold text-foreground">{deviceInfo.id}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatusCard 
            label="Soil Health Status"
            value={getSoilHealthText(currentReadings.soilMoisture)}
            status={getSoilHealthStatus(currentReadings.soilMoisture)}
            icon={<Droplets />}
          />
          
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Irrigation Needed</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      {getIrrigationNeeded(currentReadings.soilMoisture) ? 'Yes' : 'No'}
                    </span>
                    {getIrrigationNeeded(currentReadings.soilMoisture) ? (
                      <AlertTriangle className="text-warning" />
                    ) : (
                      <CheckCircle2 className="text-success" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Last Updated</p>
                <p className="text-lg font-semibold text-foreground">
                  {new Date().toLocaleTimeString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Sensor Readings */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Current Readings</h2>
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

        {/* Recent Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Recent Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentInsights.map((insight) => (
                <div key={insight.id} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/30">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    insight.type === 'alert' ? 'bg-warning' : 
                    insight.type === 'action' ? 'bg-primary' : 'bg-muted-foreground'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{insight.insight}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(insight.date).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Soil Moisture Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-8 bg-accent/20 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {currentReadings.soilMoisture}%
                  </div>
                  <p className="text-sm text-muted-foreground">Current Soil Moisture</p>
                  <div className="mt-4 w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-smooth" 
                      style={{ width: `${currentReadings.soilMoisture}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <Button 
            onClick={() => navigate('/detailed-analysis')}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold transition-smooth shadow-moderate hover:shadow-strong"
          >
            View Detailed Analysis →
          </Button>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span className="h-px bg-border flex-1"></span>
            <span className="text-sm">or</span>
            <span className="h-px bg-border flex-1"></span>
          </div>
          
          <Button 
            onClick={() => navigate('/about')}
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold transition-smooth"
          >
            Meet Our Team →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;