
        //using foreach loop we can access tha value of object present inside of array    .... see the last ex.

        let hero=['sahrukh','ranveer','dhoni']
        let newhero=['vishal','ramesh','manoj']

        hero.push(newhero)
        console.log(hero);
        console.log(hero[2][1]);

        // let a=hero.concat(newhero)  //merge both array
        // console.log(a);
        
        // let all_hero=[...hero,...newhero]   
        // console.log(all_hero);  //merge both array
        
        let anotherArray=[1,2,3,[4,5,6,],7,[6,5,[4,8,]]]
        let realArray=anotherArray.flat(Infinity)    // print all the value in arry of array ...which in inside of array

        console.log(realArray);
        

        // console.log(Array.from("raza"));   //change this string to Array
        // console.log(Array.isArray(realArray));
        // console.log(Array.isArray("mdraza"));

        let score1=100
        let score2=200
        let score3=300

        // console.log(Array.of(score1,score2,score3));  //Change into Array all the values



        //using foreach loop we can access tha value of object present inside of array    

        const arr=[
            {
                name:"razamohammad",
                course:"B.tech",
                age:21
            },
            {
                name:"alam",
                course:"B.pharma",
                age:22
            },
            {
                name:"tabish",
                course:"M.tech",
                age:23
            }
        ]

        arr.forEach(function (item){
            console.log(item.name);
        })
    
        