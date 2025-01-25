const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter ( (num ) => num > 4 )
console.log (newNums)


const books = [
    { title: 'Book 1', genre: 'Fiction', publish: 1998,edition: 2004},
    { title: 'Book 2', genre: 'Non-Fiction', publish: 1992},
    { title: 'Book 3', genre: 'History', publish: 2005},
    { title: 'Book 4', genre: 'art', publish: 1989},
    { title: 'Book 5', genre: 'motivational', publish: 2000},
    { title: 'Book 6', genre: 'history ', publish: 1998,edition: 2004},
    { title: 'Book 7', genre: 'Non-Fiction', publish: 1992},
    { title: 'Book 8', genre: 'Fiction', publish: 2005},
    { title: 'Book 9', genre: 'Fiction', publish: 2009},
];

let userbooks = books.filter( (bk) => bk.genre === 'History' )

userbooks = books.filter ( (bk ) => { return bk.publish >= 2000} )

userbooks = books.filter ( (bk) => {
    return bk.genre === 'History' && bk.publish >= 2000 })


console.log(userbooks);

