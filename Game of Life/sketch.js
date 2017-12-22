function create2DArray(rows, cols) {
	let arr = new Array(rows);

	for (let i = 0; i < arr.length; i++){
		arr[i] = new Array(cols);
	}
	return arr;
}

let grid;
let rows;
let cols;
let resolution = 40;

function setup(){
	createCanvas(400,400);
	rows = height / resolution;
	cols = width / resolution;
	grid = create2DArray(rows, cols);

	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			grid[i][j] = floor(random(2));
		}
	}

}

function draw() {
	background(0);
	for(let i = 0; i < rows; i++){
		for(let j = 0; j < cols; j++){
			let y =	i * resolution;
			let x = j * resolution;
			
			if(grid[i][j] == 1){
				fill(255,68,68);
				rect(x,y,resolution-1,resolution-1)
			}
			else{
				fill(61,186,61);
				rect(x,y,resolution-1,resolution-1)
			}
		}
	}

}