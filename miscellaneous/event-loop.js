/***
 * 🧠 Problem: Event Loop + Async/Await + Promise Resolution Order
Question

What is the exact output order of the following code and why?

You must explain:

async/await desugaring

microtask checkpoints

promise chaining

synchronous vs async boundaries
 */


console.log("start");

async function foo() {
  console.log("foo start");

  await bar();

  console.log("foo end");
}

async function bar() {
  console.log("bar start");

  Promise.resolve().then(() => {
    console.log("bar promise");
  });

  return Promise.resolve("bar end");
}

foo();

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");

/**
 * 📊 Interviewer Scorecard
 * Area	Verdict
 * Async/await concept	✅ Good
 * Event loop fundamentals	⚠️ Shaky
 * Queue classification	❌ Needs fix
 * Output correctness	⚠️ Partially right
 * Senior confidence	⚠️ Borderline
 */


