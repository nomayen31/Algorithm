const dataCache = new Map();

const expensiveTask = (id) =>{
    console.log("Run the expensive task for: ", id);
    return{
        id:id,
        data:`Some data for id : ${id}`,
        timestamp: new Date().toLocaleString()
    };
};


const getData = (id) =>{
   if (dataCache.has(id)) {
    console.log("Cache hit for id ", id);
    
    return dataCache.get(id)
   }

   console.log("Cache miss for id ", id);
   

   const data = expensiveTask(id);
   dataCache.set(id, data)
   return data;
}

console.log(dataCache);

console.log(getData(10));
console.log(getData(10));
console.log(dataCache);
