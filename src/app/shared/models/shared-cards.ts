export interface SharedCards {
    title: string;
    value: string | number;

    subtitle?: string;
    icon?: string;

    variant?:
    | 'default'
    | 'gradient'
    | 'compact'
    | 'coupon'
    | 'metric'
    | 'stats';

    iconBg?: string;
    iconColor?: string;

    cardBg?: string;
    textColor?: string;

    trend?: {
        value: string;
        type: 'up' | 'down';
    };
}
