
function sum(){
    let product = [
        {
          id: 1,
          name: 'product1',
          price: 50
        },
        {
          id: 2,
          name: 'product2',
          price: 60
        },
        {
          id: 1,
          name: 'product3',
          price: 35
        },
      ];
    //   let sum = 0;
    // for (let i = 0; i < product.length; i++){
    //    sum += product[i].price;
    // }
    // return sum;
    let sum = product.reduce(function(prev, cur){
        return(prev + cur);
    })
}