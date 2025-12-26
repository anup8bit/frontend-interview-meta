What are Web APIs in the Event Loop context?
Web APIs are browser-provided APIs (outside the JavaScript engine) that handle asynchronous operations so the Call Stack stays non-blocking.
JavaScript itself is single-threaded.
Web APIs run in the browser environment, not in the JS engine (V8).
Where do Web APIs live?
Copy code

Browser
 ├─ JavaScript Engine (V8)
 │   └─ Call Stack
 ├─ Web APIs
 ├─ Microtask Queue
 └─ Macrotask Queue
Web APIs do the heavy / waiting work and notify JS when done.
Common Web APIs that handle async tasks
1️⃣ Timers API
Handles delays and scheduling.
Copy code
Js
setTimeout(() => console.log("Hello"), 1000);
setInterval(() => console.log("Tick"), 1000);
➡️ Implemented by browser timers, not JS
➡️ Callback goes to Macrotask Queue
2️⃣ Fetch / Network APIs
Handles HTTP requests.
Copy code
Js
fetch("/api/data").then(res => res.json());
➡️ Browser networking layer
➡️ then / await continuations go to Microtask Queue
3️⃣ DOM Events API
Handles user interactions.
Copy code
Js
button.addEventListener("click", () => console.log("Clicked"));
➡️ Browser event system
➡️ Event callback → Macrotask Queue
4️⃣ Promise API (partially Web API)
Promises are special:
Copy code
Js
Promise.resolve().then(() => console.log("microtask"));
➡️ Promise resolution is handled by the JS engine ➡️ .then / await callbacks go to Microtask Queue
⚠️ Promise itself is not a Web API
⚠️ But async operations that resolve promises use Web APIs
5️⃣ MutationObserver API
Observes DOM changes.
Copy code
Js
new MutationObserver(() => console.log("DOM changed"));
➡️ Browser DOM engine
➡️ Callback goes to Microtask Queue
6️⃣ Web Storage APIs
Copy code
Js
localStorage.setItem("a", "1");
➡️ Browser storage layer
➡️ Synchronous but outside JS engine
7️⃣ Media & Device APIs
setTimeout
requestAnimationFrame
Geolocation
Camera / Mic
Clipboard
WebSocket
Copy code
Js
socket.onmessage = () => {};
➡️ Managed by browser background threads
➡️ Callbacks → Macrotask / Microtask (depending on API)
Node.js equivalent (NOT Web APIs)
In Node.js, there are NO Web APIs.
Instead, async work is handled by:
libuv
Thread pool
OS async APIs
Examples:
setTimeout
fs.readFile
setImmediate
Interview-grade summary
Web APIs are browser-provided background features that execute asynchronous tasks outside the JavaScript engine and push their callbacks into the task queues when completed.
One-line answer for interviews 🎯
Web APIs are browser features like Timers, Fetch, DOM Events, and MutationObserver that handle async operations outside the JS engine and notify the Event Loop via task queues.
If you want, I can next:
Draw a step-by-step execution trace
Give tricky interview questions
Explain why Promises use microtasks
Compare Browser vs Node.js event loop
Just tell me 👍