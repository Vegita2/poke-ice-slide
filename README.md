# Pokemon Ice Slide solver

Solves Pokemon Ice Slide puzzles (Or similar style puzzles in other games)
  
![mixed](https://user-images.githubusercontent.com/9483499/196500327-322333d4-5ebb-426e-9253-147cf88109e9.png)


## Getting Started

To use the app simply go to https://poke-ice.netlify.app/

## Maps to import
To import the maps copy the code below and click on the `import` button inside the app

#### Pokemon Gold/Silver - Ice Path:
```json
{"width":17,"height":14,"tiles":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,3,2,2,2,2,2,2,2,3,3,2,2,2,3,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,3,2,2,2,2,3,3,2,3,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,3,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,3,2,2,3,3,3,2,2,2,3,2,2,2,2,2,2,2,3,3,2,2,3,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,3,2,2,3,2,2,2,11,3,3,3,3,3,3,3,1,21,3,3,3,3,1,3,3,3,3,3,3,3,1,1,3,3,3,3,1]}
```

#### Pokemon Unbound - Victory Road:
```json
{"width":37,"height":30,"tiles":[2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,3,2,2,2,2,2,2,3,2,2,2,3,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,3,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,3,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,2,3,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,3,3,3,3,3,3,1,1,1,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,1,1,1,1,1,1,3,3,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,21,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,11,1,1,1,1,1,1,1,1,1,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,2,3,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,3,3,3,3,1,1,1,1,1,1,2,3,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,3,1,1,1,1,1,1,1,1,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,1,1,1,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,3,3,3,3,3,2,3,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,3,2,3,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,3,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]}
```

## Development

For development you need to have [Nodejs](https://nodejs.org/en/) installed.

Run the following command to install dependencies
```
npm install
```


Build the code with
```
npm run serve
```

To view the app open the `index.html` in a browser
