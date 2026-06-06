import { SharedCards } from '../models/shared-cards';

export const ORDER_SUMMARY_CARDS: SharedCards[] = [
    {
        title: 'Total Orders',
        value: '1,845',
        icon: 'ri-box-3-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#3B82F6,#2563EB)',
        textColor: '#fff'
    },

    {
        title: 'Pending',
        value: '84',
        icon: 'ri-time-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#FF6B00,#EA580C)',
        textColor: '#fff'
    },

    {
        title: 'Processing',
        value: '156',
        icon: 'ri-loader-4-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#6366F1,#4F46E5)',
        textColor: '#fff'
    },

    {
        title: 'Delivered',
        value: '1,342',
        icon: 'ri-checkbox-circle-line',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg,#00C853,#00B248)',
        textColor: '#fff'
    }
];