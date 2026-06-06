import { SharedCards } from "../models/shared-cards";

export const statsCards: SharedCards[] = [
    {
        title: 'Total Revenue',
        value: '$67,840',
        icon: 'ri-money-dollar-circle-line',
        iconBg: '#E8F0FF',
        iconColor: '#2563EB',
        variant: 'stats',
        trend: {
            value: '12.5% vs last month',
            type: 'up'
        }
    },
    {
        title: 'Total Orders',
        value: '1,845',
        icon: 'ri-shopping-cart-line',
        iconBg: '#EAFBF1',
        iconColor: '#16A34A',
        variant: 'stats',
        trend: {
            value: '8.2% vs last month',
            type: 'up'
        }
    },
    {
        title: 'Total Products',
        value: '2,847',
        icon: 'ri-box-3-line',
        iconBg: '#F3E8FF',
        iconColor: '#9333EA',
        variant: 'stats',
        trend: {
            value: '5.1% vs last month',
            type: 'up'
        }
    },
    {
        title: 'Active Customers',
        value: '4,392',
        icon: 'ri-group-line',
        iconBg: '#E8F0FF',
        iconColor: '#2563EB',
        variant: 'stats',
        trend: {
            value: '15.3% vs last month',
            type: 'up'
        }
    },
    {
        title: 'Pending Orders',
        value: '180',
        icon: 'ri-time-line',
        iconBg: '#FFF7ED',
        iconColor: '#EA580C',
        variant: 'stats',
        trend: {
            value: '3.2% vs last month',
            type: 'down'
        }
    },
    {
        title: 'Low Stock Products',
        value: '28',
        icon: 'ri-arrow-right-down-line',
        iconBg: '#FFF7ED',
        iconColor: '#EA580C',
        variant: 'stats',
        trend: {
            value: '12.5% vs last month',
            type: 'down'
        }
    }
];