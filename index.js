arr = [1, 2, 3, 4]
const callback = function (acc, val) {
  return acc + val
}

fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        for(const el in collection) {
            callback(collection[el])
        }
        return collection
    },

    map: function(collection, callback) {
        const newArray = []
        for(const el in collection){
            newArray.push(callback(collection[el]))
        }
        return newArray
    },

    reduce: function(collection, callback, initialVal) {
        let acc
        if (initialVal === undefined) {
            acc = 0
        } else {
            acc = initialVal  
        }
      
      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], i, collection)
      }
      return acc
    },
      
    find: function(collection, callback) {
     for(const key in collection){
         if (callback(collection[key]) === collection[key])
         debugger
             return collection[key]
        }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
