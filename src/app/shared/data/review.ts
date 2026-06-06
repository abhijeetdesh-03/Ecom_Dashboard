import { SharedCards } from '../models/shared-cards';

export const reviewCards: SharedCards[] = [
    {
        title: 'Total Reviews',
        value: '1,240',
        icon: 'ri-discuss-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
        textColor: '#fff'
    },
    {
        title: 'Average Rating',
        value: '4.5 / 5.0',
        subtitle: '★ ★ ★ ★ ☆',
        icon: 'ri-star-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #F59E0B, #D97706)',
        textColor: '#fff'
    },
    {
        title: '5 Star Reviews',
        value: '842',
        subtitle: '68% of total reviews',
        icon: 'ri-emotion-happy-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #10B981, #059669)',
        textColor: '#fff'
    },
    {
        title: '4 Star Reviews',
        value: '248',
        subtitle: '20% of total reviews',
        icon: 'ri-emotion-normal-line',
        iconBg: 'rgba(255, 255, 255, 0.2)',
        iconColor: '#fff',
        variant: 'gradient',
        cardBg: 'linear-gradient(135deg, #06B6D4, #0891B2)',
        textColor: '#fff'
    }
];