// ---------- Data setup block (DO NOT MODIFY) ---------- //
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
// ------------------------------------------------------ //


// ---------- Slow Algorithm (O(n²)) ---------- //
const commonFriendSlow = (usersA, usersB) => {
  const startTime = performance.now();
  const commonFriends = [];

  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriends.push(userB);
      }
    });
  });

  const endTime = performance.now();
  return {
    count: commonFriends.length,
    timeTookFinish: (endTime - startTime).toFixed(2) + " ms",
  };
};


// ---------- Fast Algorithm (O(n)) ---------- //
const commonFriendFast = (usersA, usersB) => {
  const startTime = performance.now();

  // Step 1: Store all userA IDs in a Set for O(1) lookups
  const userAIds = new Set(usersA.map((user) => user.id));

  // Step 2: Count users in B that exist in A
  let count = 0;
  for (const user of usersB) {
    if (userAIds.has(user.id)) {
      count++;
    }
  }

  const endTime = performance.now();
  return {
    count,
    timeTookFinish: (endTime - startTime).toFixed(2) + " ms",
  };
};


// ---------- Test Both Functions ---------- //
console.log("Running slow version...");
console.log(commonFriendSlow(usersA, usersB));

console.log("Running fast version...");
console.log(commonFriendFast(usersA, usersB));
