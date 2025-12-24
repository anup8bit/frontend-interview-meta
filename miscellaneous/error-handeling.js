/** Promise Error handeling
❌ 3. Error handling is incorrect
catch (err) {
  return err;
}


This resolves the promise with an error instead of rejecting.

Expected behavior:

“If any step fails, reject immediately”

👉 You must throw, not return.

catch (err) {
  throw err;
}


This is a big signal at senior level.

*/