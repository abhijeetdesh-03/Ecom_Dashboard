import { SharedCards } from "../models/shared-cards";

export const analyticsCards: SharedCards[] = [
    {
        title: 'Total Revenue',
        value: '$328,000',
        subtitle: '+18.2% from last period',
        icon: 'ri-money-dollar-circle-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#6366f1,#4f46e5)',
        textColor: '#fff'
    },
    {
        title: 'Total Orders',
        value: '2,310',
        subtitle: '+12.5% growth',
        icon: 'ri-shopping-cart-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#00c853,#00b248)',
        textColor: '#fff'
    },
    {
        title: 'New Customers',
        value: '2,090',
        subtitle: '+21.3% increase',
        icon: 'ri-group-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#a855f7,#c026d3)',
        textColor: '#fff'
    },
    {
        title: 'Conversion Rate',
        value: '3.8%',
        subtitle: '+0.5% improvement',
        icon: 'ri-line-chart-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#ff6b00,#ff5a00)',
        textColor: '#fff'
    }
];