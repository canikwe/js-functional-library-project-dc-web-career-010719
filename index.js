arr = [1, 2, 3, 4]

fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        for(const el of collection) {
            callback(el)
        }
        return collection
    },

    map: function(collection, callback) {
        const newArray = []
        for(const el of collection){
            newArray.push(callback(el))
        }
        return newArray
    },

    reduce: function() {

    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
