This is repro for React 19 not showing hydration errors when a Suspense boundary receives an update during hydration. (Error #421).

In order to start, run the following commands:

- npm i
- npm run dev
- open http://localhost:5173

You will see the `hello there from a lazy component` div do a blink during hydration. This is expected functionality, but there will be no error in the console which shouldn't happen.
