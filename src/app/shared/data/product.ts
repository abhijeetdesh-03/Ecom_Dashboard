import { SharedCards } from '../models/shared-cards';

export const productStats: SharedCards[] = [
    {
        title: 'Total Products',
        value: '2,847',
        subtitle: '+15 new this month',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #6366F1, #4F46E5)',
        textColor: '#fff',
        icon: 'ri-box-3-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff'
    },
    {
        title: 'Active Products',
        value: '2,835',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #10B981, #059669)',
        textColor: '#fff',
        icon: 'ri-checkbox-circle-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff'
    },
    {
        title: 'Out Of Stock',
        value: '12',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #EF4444, #DC2626)',
        textColor: '#fff',
        icon: 'ri-close-circle-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff'
    },
    {
        title: 'Low Stock',
        value: '28',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #F59E0B, #D97706)',
        textColor: '#fff',
        icon: 'ri-error-warning-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff'
    }
];