```javascript
// app/middleware.js

export function middleware(request) {
  // Ensure middleware runs only once per request
  // Example: Check for a header or session variable to avoid redundant executions
  if (request.headers.get('already-ran') === 'true') {
    return NextResponse.next(); // Skip middleware execution
  }

  // Your original middleware logic
  const response = NextResponse.next();
  response.headers.set('already-ran', 'true');
  return response;
}

export const config = {
  matcher: ['/blog/:slug'],
};
```