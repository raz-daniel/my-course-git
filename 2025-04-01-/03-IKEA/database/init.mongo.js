db = db.getSiblingDB('ikea')

db.furnitures.insertMany([
    { type: 'table', size: '120x80x75', price: 149.99, color: 'oak' },
    { type: 'chair', size: '50x55x85', price: 79.99, color: 'black' },
    { type: 'sofa', size: '220x90x85', price: 499.99, color: 'gray' },
    { type: 'cabinet', size: '100x45x180', price: 299.99, color: 'white' },
    { type: 'bookshelf', size: '80x30x200', price: 189.99, color: 'walnut' },
    { type: 'bed', size: '160x200x45', price: 399.99, color: 'pine wood' },
    { type: 'desk', size: '140x60x75', price: 219.99, color: 'mahogany' },
    { type: 'coffee table', size: '90x60x45', price: 129.99, color: 'glass' },
    { type: 'dresser', size: '120x50x90', price: 259.99, color: 'cherry' },
    { type: 'nightstand', size: '45x40x55', price: 89.99, color: 'beech' }
  ])
  