

  // Explicit Typing 3 excerise



  const items: { 
    name: string; 
    price: number; 
    quantity: number,
    category: string,
    salePercentage: number 
    isOnSale?: boolean,
}[] = [{
    name: 'potato',
    price: 1.5,
    quantity: 10,
    category: 'food',
    salePercentage: 10,
    isOnSale: true,
}, {
    name: 't-shirt',
    price: 20,
    quantity: 2,
    category: 'clothing',
    salePercentage: 20,
    isOnSale: true,
}, {
    name: 'laptop',
    price: 500,
    quantity: 1,
    category: 'electronics',
    salePercentage: 15,
    isOnSale: true,
}, {
    name: 'monitor',
    price: 200,
    quantity: 1,
    category: 'electronics',
    salePercentage: 10,
    isOnSale: true,
}, {
    name: 'socks',
    price: 2,
    quantity: 5,
    category: 'clothing',
    salePercentage: 0,
    isOnSale: false,
}, {
    name: 'apple',
    price: 0.5,
    quantity: 20,
    category: 'food',
    salePercentage: 0,
    isOnSale: false,
}, {
    name: 'jacket',
    price: 50,
    quantity: 1,
    category: 'clothing',
    salePercentage: 25,
    isOnSale: true,
}, {
    name: 'banana',
    price: 0.2,
    quantity: 10,
    category: 'food',
    salePercentage: 0,
    isOnSale: false,
}, {
    name: 'tv',
    price: 1000,
    quantity: 1,
    category: 'electronics',
    salePercentage: 10,
    isOnSale: true,
}, {
    name: 'hat',
    price: 5,
    quantity: 2,
    category: 'clothing',
    salePercentage: 0,
    isOnSale: false,
}];

function calculateTotalOfCart(items: { 
    name: string; 
    price: number; 
    quantity: number,
    category: string,
    salePercentage: number 
    isOnSale?: boolean,
}[] = []): number {
    let total = 0;
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
  
      let itemTotal = item.price * item.quantity;
      if(item.isOnSale){
        let salePercentage = ((100 - item.salePercentage) / 100)
        let salePrice = item.price * salePercentage
        itemTotal = salePrice * item.quantity
      }
      let taxRate = 0;
  
      switch(item.category) {
        case 'food':
          taxRate = 0.05;
          break;
        case 'clothing':
          taxRate = 0.1;
          break;
        case 'electronics':
          taxRate = 0.15;
          break;
        default:
          taxRate = 0.2;
      }
  
      let tax = itemTotal * taxRate;
      itemTotal += tax;
  
      total += itemTotal;
    }
  
    return total;
  }

const cartTotal = calculateTotalOfCart(items);
console.log('3. cart total', cartTotal)