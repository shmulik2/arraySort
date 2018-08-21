
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
for(var i = 0; i < library.length; i++)	
{
sorted = Object.keys(library[i])
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = library[i][key];
        return acc;
    }, {});
	library[i] = sorted;
}
	
	//console.log(library);
 
 //var str = '[';
 //for (var i = 0; i<library.length; ++i) {
	//str += '{' + "author: " + library[i]["author"] + " " + "libraryID: " + library[i]["libraryID"] + " " + "title: " + library[i]["title"] +// '}';
 //}
//str += ']'

 //console.log(str);
 
 
  
  function sortByID(array, key) {
  return array.sort(function(a, b) {
     var x = b[key]; var y = a[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
  }
 
  lbr = sortByID(library, 'libraryID');
  


console.log(lbr);