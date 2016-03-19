# Nstats

## Introduction
(Before JNsolve)Solve numerically equations and calculate best fit to a data array given, also provides a series of numeric routines usable.

## Installation

```bash
$ npm install Nstats
```

## Features
- **Nstats statistical**

## API
### `Nstats`
Initialize `Nstats`

```js
var Nstats = require('nstats');
```

#### `Nstats`
Here is exposed the statistical methods, this a application of Linear Algebra methods.

```js
var data = [
  [3,4,5,2,1,5,6],
  [1,4,0,4,1,5,6],
  [6,4,5,2,1,5,1],
  [3,4,5,5,0,5,4],
  [4,4,5,2,1,5,12],
  [0,4,0,9,1,5,3],
  [6,4,3,2,0,5,6]
]
var stats = new Nstats(data) ;
stats.media() // return the matrix with array :
// [
// [ 3.2857142857142856 ],
// [ 4 ],
// [ 3.2857142857142856 ],
// [ 3.714285714285714 ],
// [ 0.7142857142857142 ],
// [ 5 ],
// [ 5.428571428571428 ]
// ]

stats.std() // return the correlation matrix of data
stats.covariance() //  returns the covariance matrix of data
```
## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.  For any bugs report please contact to me via e-mail: cereceres@ciencias.unam.mx.

## Licence
The MIT License (MIT)

Copyright (c) 2015 Jesús Edel Cereceres with Andrés González and Marco Godínez as collaborators, 4yopping and all the related trademarks.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
