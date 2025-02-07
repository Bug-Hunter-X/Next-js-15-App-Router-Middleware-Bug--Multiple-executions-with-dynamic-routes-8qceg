# Next.js 15 App Router Middleware Bug: Multiple executions with dynamic routes

This repository demonstrates a bug in Next.js 15's App Router where middleware, when used with dynamic routes, runs multiple times unexpectedly.

## Bug Description

The middleware function is intended to run once per request, but in the scenario presented here (dynamic route with middleware), it runs repeatedly, causing issues with data fetching and page rendering.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/blog/[slug]` with different slugs. Observe that middleware logs show multiple executions.

## Expected Behavior

The middleware function should execute only once for each request to `/blog/[slug]`, regardless of the slug value.

## Actual Behavior

The middleware function executes multiple times for the same request, leading to incorrect behavior such as multiple API calls or unexpected side effects.

## Solution

The solution involves ensuring that only one execution of the middleware happens. This may involve a careful review of the middleware code itself.  Review the `bugSolution.js` file for a potential fix or workaround.