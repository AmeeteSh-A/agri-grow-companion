import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { generateMockData, insightsLog } from '@/data/mockData';
import { 
  ArrowLeft,
  Search,
  Calendar,
  Filter,
  Download,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const History = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('7d');
  
  const historicalData = generateMockData(30);
  const chartData = historicalData.slice(-168).map((reading, index) => ({
    date: new Date(Date.now() - (168 - index) * 60 * 60 * 1000).toLocaleDateString(),
    soilMoisture: reading.soilMoisture,
    temperature: reading.temperature,
    humidity: reading.humidity,
    co2: reading.co2,
  }));

  const filteredInsights = insightsLog.filter(insight =>
    insight.insight.toLowerCase().includes(searchQuery.toLowerCase()) ||
    insight.date.includes(searchQuery)
  );

  const getDateRangeData = () => {
    const days = selectedDateRange === '7d' ? 7 : selectedDateRange === '30d' ? 30 : 90;
    return chartData.slice(-days);
  };

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
                <h1 className="text-3xl font-bold text-foreground">Historical Data & Trends</h1>
                <p className="text-muted-foreground mt-1">Analyze past performance and patterns</p>
              </div>
            </div>
            <Button variant="outline" className="border-border/60 hover:border-primary/60">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Filters */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-primary" />
              <span>Data Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Date Range</label>
                <div className="flex space-x-2">
                  {['7d', '30d', '90d'].map((range) => (
                    <Button
                      key={range}
                      variant={selectedDateRange === range ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedDateRange(range)}
                      className="text-xs"
                    >
                      {range === '7d' ? '7 Days' : range === '30d' ? '30 Days' : '90 Days'}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Search Insights</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search by date or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-border/60 focus:border-primary/60"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Quick Actions</label>
                <Button variant="outline" size="sm" className="w-full border-border/60 hover:border-primary/60">
                  <Calendar className="w-4 h-4 mr-2" />
                  Custom Date Range
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Historical Charts */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-foreground">Historical Trends</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Soil Moisture vs Rainfall Pattern</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getDateRangeData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Temperature Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getDateRangeData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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
                <CardTitle className="text-lg">Humidity Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getDateRangeData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">CO₂ Level Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={getDateRangeData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
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

        {/* Historical Insights Log */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Historical Insights ({filteredInsights.length} entries)</span>
              </div>
              <Badge variant="outline" className="border-primary/50 text-primary">
                {searchQuery ? 'Filtered' : 'All Records'}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredInsights.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="w-8 h-8 mx-auto mb-2" />
                  <p>No insights found matching your search criteria.</p>
                </div>
              ) : (
                filteredInsights.map((insight) => (
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
                    <div className="flex flex-col items-end space-y-2">
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
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;