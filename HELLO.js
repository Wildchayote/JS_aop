/* const user = 'Bashir Sanni'
console.log('Hello '+user)
wife = prompt('What\'s your name? ')

console.log('Hello '+wife+' and '+user)  */
let add = function (b,c){
    return b+c;
}

let counter =0;

let power =(x,y)=>x**y;

let mult = function(op,b,c){
    return op(b,c);
}

let men = [power,add];

let result = function(){
    
    for (let man of men){
        try{
            if (!men.includes('man1')){
                throw new ReferenceError('element not defined!')
            }else{
                counter+=1
                if (counter>10){
                    return
                }
                let res = mult(m,200,400)
                if (res == Infinity){
                    res =4e9
                    console.log(res)
                    result()
                }else{
                    res *=2
                    console.log(res)
                    result()
                }
            }
        }catch(error){
            console.log('Caught '+error)
        }
    }

}

result()