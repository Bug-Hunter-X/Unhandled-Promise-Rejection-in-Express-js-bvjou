# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Asynchronous operations within request handlers should always include comprehensive error handling to prevent unexpected crashes.

## Bug

The `bug.js` file contains an Express.js application with an asynchronous operation (`someAsyncOperation`). This operation has a 50% chance of failing.  If it fails, the error is logged to the console, but the promise rejection is not handled, leading to a potential server crash.

## Solution

The `bugSolution.js` file shows the correct way to handle promise rejections using `.catch()`.  This ensures that errors are gracefully handled and do not cause the application to crash.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` (observe that it might crash or not).
4. Run `node bugSolution.js` (observe that errors are properly handled)