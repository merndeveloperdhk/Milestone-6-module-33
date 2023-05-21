const user = {id: 1, name: 'Misam ', job: 'Student'}
// javascript object Notation (json)

const stringifyed = JSON.stringify(user)
// console.log(user);
// console.log(stringifyed);

const shop = {
    owner: 'Marifa',
    address : {
        street: 'dhanmondi 2A',
        city: 'dhaka',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'mobile'],
    revenue: 45000,
    inOpen: true,
    inNew: false
}
console.log(shop);
const shopStringify = JSON.stringify(shop)
console.log(shopStringify);