const expensiveTask = (id) =>{
    console.log("Run the expensive task for: ", id);
    return{
        id:id,
        data:`Some data for id : ${id}`,
        timestamp: new Date().toLocaleString()
    };
};


const getData = (id) =>{
   return expensiveTask(id)
}


console.log(getData(10));
