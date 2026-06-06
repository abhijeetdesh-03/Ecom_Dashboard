import { SharedCards } from "../models/shared-cards";

export const couponCards: SharedCards[] = [
    {
        title: 'Active Coupons',
        value: '18',
        icon: 'ri-percent-line',
        variant: 'coupon',
        cardBg: 'linear-gradient(135deg,#a855f7,#8b00ff)',
        textColor: '#fff'
    },
    {
        title: 'Total Redemptions',
        value: '7425',
        icon: 'ri-user-shared-line',
        variant: 'coupon',
        cardBg: '#00c443',
        textColor: '#fff'
    },
    {
        title: 'Revenue Generated',
        value: '$45.2k',
        icon: 'ri-line-chart-line',
        variant: 'coupon',
        cardBg: '#2563eb',
        textColor: '#fff'
    },
    {
        title: 'Expiring Soon',
        value: '3',
        icon: 'ri-calendar-line',
        variant: 'coupon',
        cardBg: '#ff6600',
        textColor: '#fff'
    }
];