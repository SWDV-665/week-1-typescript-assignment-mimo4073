
class groceryListItem {
name: string;
price: number;
quantity: number;

    constructor(n: string, p: number, q: number) {
        this.name = n;
        this.price = p;
        this.quantity = q;
        
    }

    getItemName() {
        return `${this.name}`;
    }

    getItemTotalPrice(){
        var total = this.price * this.quantity;
        return `${total}`;
    }
} 

const milk = new groceryListItem('Milk', 3.55, 1);
const eggs = new groceryListItem('Eggs', 1.39, 2);
const apple = new groceryListItem('Apple', 0.75, 9);
const groceries = [milk, eggs, apple];

const htmlList = document.getElementsByClassName('htmlList')[0];
console.log(htmlList);

groceries.forEach((groceryItem, index) => {
    let listEntry = document.createElement('p')
    let listEntryText = document.createTextNode( groceryItem.quantity + ' x ' + groceryItem.name + ', $'+ groceryItem.getItemTotalPrice())
    listEntry.appendChild(listEntryText)
    htmlList.appendChild(listEntry);

})

console.log(groceries)


