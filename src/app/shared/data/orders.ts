import { TableColumn } from '../models/shared-table';

export const ORDERS_TABLE = {

    columns: [
        { key: 'orderId', label: 'ORDER ID' },
        { key: 'customer', label: 'CUSTOMER NAME' },
        { key: 'product', label: 'PRODUCT' },
        { key: 'quantity', label: 'QUANTITY' },
        { key: 'amount', label: 'AMOUNT' },
        { key: 'payment', label: 'PAYMENT' },
        { key: 'status', label: 'STATUS' },
        { key: 'date', label: 'DATE' }
    ] as TableColumn[],

    data: [
        {
            orderId: '#ORD-2341',
            customer: 'Sarah Wilson',
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
            date: '2026-06-03 10:30 AM'
        },

        {
            orderId: '#ORD-2340',
            customer: 'Mike Johnson',
            product: 'Smart Watch',
            quantity: 1,
            amount: '$299.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Processing',
                class: 'primary'
            },
            date: '2026-06-03 09:15 AM'
        },

        {
            orderId: '#ORD-2339',
            customer: 'Emma Davis',
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
            date: '2026-06-02 04:45 PM'
        },

        {
            orderId: '#ORD-2338',
            customer: 'James Brown',
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
            date: '2026-06-02 02:20 PM'
        },

        {
            orderId: '#ORD-2337',
            customer: 'Lisa Anderson',
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
            date: '2026-06-01 11:30 AM'
        },

        {
            orderId: '#ORD-2336',
            customer: 'David Wilson',
            product: 'Phone Case',
            quantity: 2,
            amount: '$39.98',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-06-01 08:45 AM'
        },

        {
            orderId: '#ORD-2335',
            customer: 'Rachel Green',
            product: 'Keyboard',
            quantity: 1,
            amount: '$129.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Cancelled',
                class: 'danger'
            },
            date: '2026-05-31 03:15 PM'
        },

        {
            orderId: '#ORD-2334',
            customer: 'Tom Harris',
            product: 'Mouse Pad',
            quantity: 4,
            amount: '$59.96',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Processing',
                class: 'primary'
            },
            date: '2026-05-31 01:00 PM'
        },

        {
            orderId: '#ORD-2333',
            customer: 'Sophia Martinez',
            product: 'Desk Mat',
            quantity: 1,
            amount: '$29.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-05-30 02:40 PM'
        },

        {
            orderId: '#ORD-2332',
            customer: 'Daniel Clark',
            product: 'Mechanical Keyboard',
            quantity: 1,
            amount: '$189.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Shipped',
                class: 'primary'
            },
            date: '2026-05-30 11:15 AM'
        },

        {
            orderId: '#ORD-2331',
            customer: 'Olivia Rodriguez',
            product: 'Webcam 4K',
            quantity: 1,
            amount: '$149.99',
            payment: {
                label: 'Pending',
                class: 'warning'
            },
            status: {
                label: 'Pending',
                class: 'warning'
            },
            date: '2026-05-29 04:50 PM'
        },

        {
            orderId: '#ORD-2330',
            customer: 'Liam Walker',
            product: 'USB Hub',
            quantity: 2,
            amount: '$39.98',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-05-29 09:30 AM'
        },

        {
            orderId: '#ORD-2329',
            customer: 'Mia White',
            product: 'Monitor Stand',
            quantity: 1,
            amount: '$69.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Shipped',
                class: 'primary'
            },
            date: '2026-05-28 02:15 PM'
        },

        {
            orderId: '#ORD-2328',
            customer: 'Ethan Hall',
            product: 'Wireless Mouse',
            quantity: 3,
            amount: '$149.97',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Processing',
                class: 'primary'
            },
            date: '2026-05-28 10:05 AM'
        },

        {
            orderId: '#ORD-2327',
            customer: 'Ava Allen',
            product: 'External SSD 1TB',
            quantity: 1,
            amount: '$109.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-05-27 05:10 PM'
        },

        {
            orderId: '#ORD-2326',
            customer: 'Alexander Young',
            product: 'Type-C Cable 2m',
            quantity: 4,
            amount: '$39.96',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-05-27 01:25 PM'
        },

        {
            orderId: '#ORD-2325',
            customer: 'Isabella King',
            product: 'Laptop Sleeve',
            quantity: 1,
            amount: '$24.99',
            payment: {
                label: 'Pending',
                class: 'warning'
            },
            status: {
                label: 'Pending',
                class: 'warning'
            },
            date: '2026-05-26 11:45 AM'
        },

        {
            orderId: '#ORD-2324',
            customer: 'William Wright',
            product: 'LED Desk Lamp',
            quantity: 1,
            amount: '$45.00',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Shipped',
                class: 'primary'
            },
            date: '2026-05-26 09:20 AM'
        },

        {
            orderId: '#ORD-2323',
            customer: 'Charlotte Lopez',
            product: 'Noise Cancelling Earbuds',
            quantity: 1,
            amount: '$129.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Cancelled',
                class: 'danger'
            },
            date: '2026-05-25 03:55 PM'
        },

        {
            orderId: '#ORD-2322',
            customer: 'James Hill',
            product: 'Ergonomic Office Chair',
            quantity: 1,
            amount: '$349.99',
            payment: {
                label: 'Paid',
                class: 'success'
            },
            status: {
                label: 'Delivered',
                class: 'success'
            },
            date: '2026-05-25 10:10 AM'
        }
    ]
};