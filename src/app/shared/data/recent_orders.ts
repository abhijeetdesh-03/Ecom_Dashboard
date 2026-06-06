import { TableColumn } from "../models/shared-table";

export const RECENT_ORDERS_TABLE = {
    columns: [
        { key: 'customer', label: 'Customer' },
        { key: 'product', label: 'Product' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'amount', label: 'Amount' },
        { key: 'payment', label: 'Payment' },
        { key: 'status', label: 'Status' },
        { key: 'date', label: 'Date' }
    ] as TableColumn[],

    data: [
        {
            customer: 'John Wilson',
            product: 'Wireless Headphones',
            quantity: 2,
            amount: '$159.99',

            payment: {
                label: 'Paid',
                class: 'success'
            },

            status: {
                label: 'Shipped',
                class: 'primary'
            },

            date: '2026-06-03'
        },

        {
            customer: 'Sarah Johnson',
            product: 'Smart Watch',
            quantity: 1,
            amount: '$299.99',

            payment: {
                label: 'Paid',
                class: 'success'
            },

            status: {
                label: 'Processing',
                class: 'warning'
            },

            date: '2026-06-03'
        },

        {
            customer: 'Mike Davis',
            product: 'Laptop Stand',
            quantity: 3,
            amount: '$89.97',

            payment: {
                label: 'Pending',
                class: 'warning'
            },

            status: {
                label: 'Pending',
                class: 'warning'
            },

            date: '2026-06-02'
        },

        {
            customer: 'Emma Brown',
            product: 'USB-C Cable',
            quantity: 5,
            amount: '$49.95',

            payment: {
                label: 'Paid',
                class: 'success'
            },

            status: {
                label: 'Delivered',
                class: 'success'
            },

            date: '2026-06-02'
        },

        {
            customer: 'David Anderson',
            product: 'Bluetooth Speaker',
            quantity: 1,
            amount: '$79.99',

            payment: {
                label: 'Paid',
                class: 'success'
            },

            status: {
                label: 'Shipped',
                class: 'primary'
            },

            date: '2026-06-01'
        }
    ]
};