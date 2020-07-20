# mini-utils-ts

mini 系列 js 工具库 🍤🐷💘  
a javascript utils library includes my frequently used functions

[![NPM version](https://img.shields.io/npm/v/mini-utils-ts.svg?style=flat)](https://npmjs.org/package/mini-utils-ts)
[![Build Status](https://travis-ci.org/lebronjs/mini-utils-ts.svg?branch=master)](https://travis-ci.org/lebronjs/mini-utils-ts)
[![NPM downloads](http://img.shields.io/npm/dm/mini-utils-ts.svg?style=flat)](https://npmjs.org/package/mini-utils-ts)

---

## 🏗 Installation

```bash
$ npm install mini-utils-ts
```

## 📝 Usage

#### 1. import everything

```bash
import utils from "mini-utils-ts"
utils.verify.isArrayLike([1,2,3])
```

#### 2. import one functinal module

```bash
import {random} from  "mini-utils-ts"

random.integer(1,10)
```

#### 3. require only what you need

```bash
const image = require("mini-utils-ts").image;

image.compress("./images", "./build/images");
```

## 📦 Methods

### `verify`

-   `isArrayLike`

### `random`

-   `integer`
-   `shuffle`

### `image`

-   `compress`

### `debounce`

### `throttle`

### `timeDifference`

### `getQueryParam`
