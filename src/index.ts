const TILE_SIZE = 32;

interface Point {
	x: number,
	y: number
}

interface Cpy {
	width: number;
	height: number;
	tiles: number[];
}

interface Tile extends Point {
	type: TILE_TYPE;
	type2: TILE_TYPE;
	dist: number;
	prev?: Tile;
}

enum TILE_TYPE {
	floor = 'floor',
	ice = 'ice',
	wall = 'wall',
	start = 'start',
	end = 'end',
	empty = 'empty'
}

const canvas: HTMLCanvasElement = document.getElementById('canvas') as any;
const ctx = canvas.getContext('2d')!;

let width = 10;
let height = 10;

let currType = TILE_TYPE.wall;

let tiles: Tile[][] = [];

function updateSize() {
	width = parseInt((document.getElementById('width') as HTMLInputElement).value);
	height = parseInt((document.getElementById('height') as HTMLInputElement).value);
	
	canvas.width = width * TILE_SIZE;
	canvas.height = height * TILE_SIZE;
	
	tiles.length = width;
	for (let i = 0; i < width; i++) {
		tiles[i] = tiles[i] ?? [];
		tiles[i].length = height;
		for (let j = 0; j < height; j++) {
			tiles[i][j] = {
				// @ts-ignore
				type: TILE_TYPE.ice,
				// @ts-ignore
				type2: TILE_TYPE.empty,
				...tiles[i]?.[j],
				dist: Infinity,
				x: i,
				y: j,
			};
		}
	}
	drawTiles();
}

let allowDraw = false;

function toggleDraw(v: boolean) {
	allowDraw = v;
}

function mouseClick(event: MouseEvent) {
	const x = Math.floor(event.offsetX / TILE_SIZE);
	const y = Math.floor(event.offsetY / TILE_SIZE);
	
	document.getElementById('x')!.innerText = x + '';
	document.getElementById('y')!.innerText = y + '';
	
	if (!allowDraw) {
		return;
	}
	
	console.log(x, y);
	
	const tile = tiles[x][y];
	
	if (tile.type === currType || tile.type2 === currType) {
		return;
	}
	switch (currType) {
		case TILE_TYPE.floor:
		case TILE_TYPE.ice:
		case TILE_TYPE.wall:
			tile.type = currType;
			break;
		case TILE_TYPE.start:
		case TILE_TYPE.end:
		case TILE_TYPE.empty:
			tile.type2 = currType;
			break;
		
	}
	drawTiles();
}

function drawTiles() {
	console.log('draw tiles');
	ctx.clearRect(0, 0, TILE_SIZE * width, TILE_SIZE * height);
	for (let i = 0; i < tiles.length; i++) {
		for (let j = 0; j < tiles[0].length; j++) {
			const tile = tiles[i][j];
			let x = i * TILE_SIZE;
			let y = j * TILE_SIZE;
			ctx.font = '20px Roboto';
			
			let color = '';
			switch (tile.type) {
				case TILE_TYPE.floor:
					color = 'white';
					break;
				case TILE_TYPE.ice:
					color = 'rgb(63,196,189)';
					break;
				case TILE_TYPE.wall:
					color = 'rgb(108,51,9)';
					break;
			}
			
			ctx.fillStyle = color;
			ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
			ctx.textAlign = 'center';
			x += TILE_SIZE / 2;
			y += TILE_SIZE / 2 + 4;
			ctx.fillStyle = 'black';
			if (tile.type2 === TILE_TYPE.start) {
				ctx.fillText('S', x, y);
			} else if (tile.type2 === TILE_TYPE.end) {
				ctx.fillText('E', x, y);
			} else {
			
			}
		}
	}
	
	drawGrid();
	
	calcPath();
}

function dijkstra() {
	const queue: Tile[] = [];
	for (let i = 0; i < tiles.length; i++) {
		for (let j = 0; j < tiles[0].length; j++) {
			const tile = tiles[i][j];
			tile.prev = undefined;
			tile.dist = Infinity;
			if (tile.type2 === TILE_TYPE.start) {
				tile.dist = 0;
				queue.push(tile);
			}
		}
	}
	const sortFn = (a: Tile, b: Tile) => b.dist - a.dist;
	queue.sort(sortFn);
	
	const visited = new Set<Tile>();
	while (queue.length > 0) {
		const tile = queue.pop()!;
		visited.add(tile);
		const neighbours = getNeighbours(tile.x, tile.y).filter(v => !visited.has(v));
		for (let neighbour of neighbours) {
			const tempDist = tile.dist + 1;
			if (tempDist < neighbour.dist) {
				neighbour.dist = tempDist;
				neighbour.prev = tile;
				if (neighbour.type2 === TILE_TYPE.end) {
					return [neighbour];
				}
				queue.push(neighbour);
			}
		}
		queue.sort(sortFn);
	}
	return Array.from(visited);
}

function getNeighbours(x: number, y: number) {
	
	return [
		...getDir(x, y, { x: 1, y: 0 }),
		...getDir(x, y, { x: 0, y: 1 }),
		...getDir(x, y, { x: -1, y: 0 }),
		...getDir(x, y, { x: 0, y: -1 }),
	];
}

function getDir(x: number, y: number, differ: Point): Tile[] {
	let tile = tiles[x]?.[y];
	if (!tile || tile.type === TILE_TYPE.wall) {
		return [];
	}
	do {
		x += differ.x;
		y += differ.y;
		tile = tiles[x]?.[y];
		if (!tile || tile.type === TILE_TYPE.wall) {
			x -= differ.x;
			y -= differ.y;
			return [tiles[x]?.[y]];
		}
		if (tile.type === TILE_TYPE.floor) {
			return [tiles[x]?.[y]];
		}
	} while (tile.type === TILE_TYPE.ice);
	return [];
}

function calcPath() {
	let res = dijkstra()!;
	
	ctx.strokeStyle = 'rgba(0,0,0,2)';
	ctx.fillStyle = 'black';
	ctx.lineWidth = 1;
	ctx.beginPath();
	
	for (let tile of res) {
		while (tile.prev) {
			const curr = tile;
			tile = tile.prev;
			canvas_arrow(tile.x, tile.y, curr.x, curr.y);
		}
	}
	
	
	ctx.stroke();
	console.log(res);
}

function canvas_arrow(fromx: number, fromy: number, tox: number, toy: number) {
	fromx *= TILE_SIZE;
	fromy *= TILE_SIZE;
	tox *= TILE_SIZE;
	toy *= TILE_SIZE;
	
	fromx += TILE_SIZE / 2;
	fromy += TILE_SIZE / 2;
	tox += TILE_SIZE / 2;
	toy += TILE_SIZE / 2;
	
	const headlen = 10; // length of head in pixels
	const dx = tox - fromx;
	const dy = toy - fromy;
	const angle = Math.atan2(dy, dx);
	ctx.moveTo(fromx, fromy);
	ctx.lineTo(tox, toy);
	ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
	ctx.moveTo(tox, toy);
	ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}

function updateType() {
	currType = (document.querySelector('input[name="t"]:checked') as HTMLInputElement).value as any;
	console.log(currType);
}

function drawGrid() {
	const stepsX = canvas.width / TILE_SIZE;
	const stepsY = canvas.height / TILE_SIZE;
	ctx.strokeStyle = 'rgba(0,0,0,0.3)';
	ctx.fillStyle = 'black';
	ctx.lineWidth = 1;
	for (let i = 0; i < stepsX; i++) {
		for (let j = 0; j < stepsY; j++) {
			ctx.beginPath();
			ctx.moveTo(i * TILE_SIZE, j * TILE_SIZE);
			ctx.lineTo(i * TILE_SIZE, (j + 1) * TILE_SIZE);
			ctx.lineTo((i + 1) * TILE_SIZE, (j + 1) * TILE_SIZE);
			ctx.stroke();
		}
	}
}

async function exportMap() {
	const cpy: Cpy = {
		width: width,
		height: height,
		tiles: [],
	};
	
	for (let i = 0; i < tiles.length; i++) {
		for (let j = 0; j < tiles[0].length; j++) {
			const tile = tiles[i][j];
			let num = 0;
			
			switch (tile.type) {
				case TILE_TYPE.floor:
					num = 1;
					break;
				case TILE_TYPE.ice:
					num = 2;
					break;
				case TILE_TYPE.wall:
					num = 3;
					break;
			}
			switch (tile.type2) {
				case TILE_TYPE.empty:
					num += 0;
					break;
				case TILE_TYPE.start:
					num += 10;
					break;
				case TILE_TYPE.end:
					num += 20;
					break;
			}
			cpy.tiles.push(num);
		}
	}
	
	await navigator.clipboard.writeText(JSON.stringify(cpy));
}

async function importMap() {
	const cpy: Cpy = JSON.parse(await navigator.clipboard.readText());
	
	(document.getElementById('width') as HTMLInputElement).value = cpy.width + '';
	(document.getElementById('height') as HTMLInputElement).value = cpy.height + '';
	
	tiles = [];
	
	for (let i = 0; i < cpy.tiles.length; i++) {
		const tile = cpy.tiles[i];
		const y = i % cpy.height;
		const x = Math.floor(i / cpy.height);
		
		const type1 = tile % 10;
		const type2 = Math.floor(tile / 10);
		
		let type11 = TILE_TYPE.ice;
		let type22 = TILE_TYPE.empty;
		
		switch (type1) {
			case 1:
				type11 = TILE_TYPE.floor;
				break;
			case 2:
				type11 = TILE_TYPE.ice;
				break;
			case 3:
				type11 = TILE_TYPE.wall;
				break;
		}
		
		switch (type2) {
			case 0:
				type22 = TILE_TYPE.empty;
				break;
			case 1:
				type22 = TILE_TYPE.start;
				break;
			case 2:
				type22 = TILE_TYPE.end;
				break;
		}
		
		tiles[x] = tiles[x] ?? [];
		tiles[x][y] = {
			type: type11,
			type2: type22,
			x: x,
			y: y,
			dist: Infinity,
		};
	}
	updateSize();
}

updateSize();
