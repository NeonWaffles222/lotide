# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nmcmillan/lotide`

**Require it:**

`const _ = require('@nmcmillan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `middle(array)`: Returns the middle element(s) of an array.
* `tail(array)`: Returns all elements but the first in an array.
* `assertEqual(actual, expected)`: Determines if the 2 given values are equal.
* `eqArrays(actualArray, expectedArray)`: Returns true or false if the 2 given arrays are equal or not.
* `assertArraysEqual(actual, expected)`: Determines if the 2 given arrays are equal.
* `eqObjects(objectActual, objectExpexted)`: Returns true or false if the 2 given objects are equal or not.
* `assertObjectEqual(actual, expected)`: Determines if the 2 given objects are equal.
* `countOnly(allItems, itemsToCount)`: Returns an object with the names and count of the choosen items.
* `countLetters(string)`: Returns an object with the letters an how many times they were used for the given string
* `findKey(object, callback)`: Returns the first key of an object that meets the given callback criteria.
* `findKeyByValue(object, value)`: Returns the first key of an object that meets the given value.
* `letterPositions(string)`: Returns all positions of the letters in the given string.
* `map(array, callback)`: Returns an array based on the given callback.
* `takeUntil(array, callback)`: Returns a slice of an array based on the given callback.
* `without(source, itemsToRemove)`: Removes unwanted elements from an array.