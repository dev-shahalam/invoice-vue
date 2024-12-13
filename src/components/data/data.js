const invoice1 = {
    sender: 'Anas IT Shop',
    billTo: 'Abdur Rahman Umor',
    shipTo: 'Mohakhali, Dhaka',
    invoiceNo: 'ANS11022',
    date: '12-12-2024',
    dueDate: '17-12-2024',
    additionalNote: 'Please call before comming',
    products: [
        {
            name: 'Laravel E-Commerce Projects',
            qty: '2',
            rate: '73400',
            amount: '',
        },
    ],
    subtotal: '',
    tax: '5',
    total: '',
    notes: 'Please delivery as soon as possible',
    terms: '100% cash payment',
}

const invoice2 = {
    sender: 'Anas IT Shop',
    billTo: 'Abdullah',
    shipTo: 'Gulshan, Dhaka',
    invoiceNo: 'ANS11023',
    date: '20-12-2024',
    dueDate: '27-12-2024',
    additionalNote: 'Please call before comming',
    products: [
        {
            name: 'Laravel ERP Projects',
            qty: '5',
            rate: '73400',
            amount: '',
        },
    ],
    subtotal: '',
    tax: '5',
    total: '',
    notes: 'Please delivery as soon as possible',
    terms: '100% cash payment',
}

export {invoice1, invoice2}