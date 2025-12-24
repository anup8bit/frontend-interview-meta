/**
 * 🔹 Part A – JavaScript Problem Solving (30 mins)
Problem 1: Deep Promise Sequencing (Meta-style)

You are given an array that may contain:

values

promises

functions that return values or promises

Your task is to resolve them sequentially (not in parallel) and return a promise that resolves to an array of resolved values in order.

Requirements

Each item must be processed only after the previous one completes

If an item is a function, invoke it

If an item is a promise, await it

If it’s a value, use it directly

If any step fails, reject immediately

Input
const tasks = [
  1,
  () => Promise.resolve(2),
  Promise.resolve(3),
  () => 4,
  () => new Promise(res => setTimeout(() => res(5), 100))
];

Expected Output
[1, 2, 3, 4, 5]

Function Signature
function resolveSequentially(tasks) {
  // your code
}

📌 Constraints

Do NOT use Promise.all

Must be sequential

Clean, production-grade code expected

👉 Start coding and explain your approach.

 */

function resolveSequentially(tasks) {
  return tasks.reduce(async(previousPromise, currentTask) => {
    const results = await previousPromise;

    let value;

    if (typeof currentTask === 'function') {
        value = currentTask();
    } else {
        value = currentTask;
    }

    if (value && typeof value?.then === 'function') {
        value = await value;
    }

    results.push(value);
    return results;
  }, Promise.resolve([]));
}


/**
 *
 * 🧠 Interviewer Evaluation (Honest)
 * Area	Score
 * Async fundamentals	✅ Strong
 * Sequencing logic	✅ Correct
 * Type handling	❌ Needs improvement
 * Error semantics	❌ Important miss
 * Code quality	⚠️ Mid-senior
 */
