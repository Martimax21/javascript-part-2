// In this exercise, we're going to create a constructor for maps in a 2D game. A Map is an array of 
// arrays of Tile objects. A Tile object represents one square in the map. It only has a type property
// which will determine if it's water, grass or sand. The Map object will have width and height properties, 
// and its constructor will generate width * height Tile objects.

// To do this exercise, let's follow these steps:

// Create a constructor function called Tile that can create new tiles for our map. This function will 
// take parameter type and create an object that has these properties:
// type: whatever was passed to the Tile constructor function

function Tile(type){
    this.type = type;
}


// The Tile objects should also have a method called isWalkable. This method should, using this.type, 
// return true or false depending on whether the tile can be walked on. The function should return true
// if the type is "grass" or "sand". The function should return false if the type is anything else.

Tile.prototype.isWalkable = function(){
    if (this.type === "grass" || this.type === "sand") {
        return true;
    }
    else {
        return false;
    }
}

// Create a constructor function called Map that will generate a map. This function will 
// take parameters width and height and create a map object with these properties:
// width: whatever was passed to the Map constructor function (should be an integer value)
// height: whatever was passed to the Map constructor function (should be an integer value)
// tiles: this property should be created as a 2D array of Tile objects inside the constructor. 
// Using two nested for loops bound by width and height respectively, create new Tile objects and 
// give them a random value for the type, between "grass", "sand" and "water".

// 1 2 3
// 4 5 6
// 7 8 9

// [0][0]
// [x][y] = tile

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

function randomType(){
    var type;
    var typeRandom = Math.random();
    if (typeRandom < 0.33) {
                type = 'sand';
            }
            else if (0.33 < typeRandom && typeRandom < 0.66) {
                type = 'grass';
            }
            else {
                type = 'water';
            }
    return type;
}

function Map(width,height){
    this.width = Math.floor(width);
    this.height = Math.floor(height);
    var tiles = [];
    for (var x = 0; x < width; x++) { 
        var row = [];
        for (var y = 0; y< height; y++) {
            var typeR = randomType();
            var tilexy = new Tile(typeR);
            row.push(tilexy);
        }
        tiles.push(row);
    }
    this.tiles = tiles;
}

// var testType = randomType();
// var testtTile = new Tile(testType);
// console.log(testtTile);
var testmap = new Map(5,5);
console.log(testmap);

// * The `Map` objects should also have two methods on them:
//     * `getWalkableOutput`: this method should iterate over the `this.tiles` 2D array, and output in
//     the console a rectangle representing the "walkability" of the map. For walkable tiles, use an `O`, 
//     and for unwalkable tiles use an `X`. For example, your output could look something like this for a 4x4 map:

//     ```
//     OOOO
//     OXXO
//     OOXO
//     OOOO
//     ```

Map.prototype.getWalkableOutput = function(){
    var column = [];
    for (var x = 0; x < this.width; x++) { 
        var row = [];
        for (var y = 0; y< this.height; y++) {
            if (this.tiles[x][y].isWalkable()) {
                
                row.push('O');
            }
            else {
                row.push('X')
            }
     
    }
           column.push(row);
    }
   return column;
}

console.log(testmap.getWalkableOutput());


//     * `getAsciiOutput`: this method should iterate over the `this.tiles` 2D array and output in the console
//     a rectangle representing the disposition of the map. For grass tiles, use a `*`, for sand tiles use a `:` 
//     and for water use a `~` symbol. For example, your output could look something like this for the same 4x4 map
//     as above:

//     ```
//     ****
//     *~~*
//     **~*
//     ::::
//     ```
Map.prototype.getAsciiOutput = function(){
    var column = [];
    for (var x = 0; x < this.width; x++) { 
        var row = [];
        for (var y = 0; y< this.height; y++) {
            if (this.tiles[x][y] === "grass") {
                row.push('*');
            }
            else if (this.tiles[x][y] === "sand"){
                row.push(':');
            }
            else {
                row.push('~');
            }
        }
           column.push(row);
    }
    return column;
}

console.log(testmap.getAsciiOutput());

//     * `spawnWarrior` (**challenge**): using the `Warrior` constructor that you created in the above exercise, 
//     create a method `spawnWarrior` that takes a warrior object and a `x` and `y` position. This method of the `Map` 
//     should take the warrior object and associate it to the appropriate `Tile`.

// You are done :)
// -----------------

