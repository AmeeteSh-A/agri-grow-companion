import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  label: string;
  value: string;
  status?: 'good' | 'moderate' | 'bad';
  icon?: React.ReactNode;
  className?: string;
}

const StatusCard = ({ label, value, status = 'good', icon, className }: StatusCardProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'good':
        return 'border-success/20 bg-success/5 text-success';
      case 'moderate':
        return 'border-warning/20 bg-warning/5 text-warning';
      case 'bad':
        return 'border-destructive/20 bg-destructive/5 text-destructive';
      default:
        return 'border-success/20 bg-success/5 text-success';
    }
  };

  const getStatusIndicator = () => {
    switch (status) {
      case 'good':
        return '●';
      case 'moderate':
        return '●';
      case 'bad':
        return '●';
      default:
        return '●';
    }
  };

  return (
    <Card className={cn('border-2 transition-smooth hover:shadow-moderate', getStatusStyles(), className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">{value}</span>
              <span className="text-2xl">{getStatusIndicator()}</span>
            </div>
          </div>
          {icon && (
            <div className="text-3xl opacity-20">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;