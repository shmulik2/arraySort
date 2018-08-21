
var library = [ 
    {
        "title":  "The Road Ahead",
        "author": "Bill Gates",
        "libraryID": 1254
    },
    {
        "title": "Walter Isaacson",
        "author": "Steve Jobs",
        "libraryID": 4264
    },
    {
        "title": "Mockingjay: The Final Book of The Hunger Games",
        "author": "Suzanne Collins",
        "libraryID": 3245
    }];
 
 function sortByID(array, key) {
 return array.sort(function(a, b) {
     var x = b[key]; var y = a[key];
     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
 });
 }
 
 lbr = sortByID(library, 'libraryID');
 
 console.log(lbr);
 