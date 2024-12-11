function createCounter() {
    let count = 0; 
    return {
        increment: function() {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount: function() {
            console.log(`Current count: ${count}`);
        }
    };
}

let  counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
