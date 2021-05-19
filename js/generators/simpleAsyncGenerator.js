const leftBtn = document.getElementById(1);
const rightBtn = document.getElementById(2);
const rootRef = document.getElementById("root");

const arr = [
  "https://dog.ceo/api/breed/akita/images/random",
  "https://dog.ceo/api/breed/australian/shepherd/images/random",
  "https://dog.ceo/api/breed/hound/plott/images/random",
];

const addPicToDom = async () => {
  const res = await (
    await fetch("https://dog.ceo/api/breed/akita/images/random")
  ).json();
  const { message } = res;

  const img = document.createElement("img");
  img.src = message;
  img.style.width = "100px";
  img.style.display = "block";
  rootRef.appendChild(img);
};

// Example 1
// async function* asyncGenerator() {
//   var i = 0;
//   while (i < 3) {
//     yield i++;
//   }
// }

// (async function () {
//   for await (let num of asyncGenerator()) {
//     console.log(num);
//   }
// })();

// Example 2
// Download Images oneByOne

// async function* streamAsyncIterator(stream) {
//   const reader = stream.getReader();
//   try {
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) return;

//       yield value;
//     }
//   } finally {
//     reader.releaseLock();
//   }
// }

// async function* downloadImages() {
//   var i = 0;
//   while (i < arr.length) {
//     await addPicToDom();
//     yield i++;
//   }
// }

// (async function () {
//   for await (let imgNum of downloadImages()) {
//     console.log(imgNum);
//   }
// })();

//  Example 3
// ==============================================
// async function* streamAsyncIterator(stream) {
//   const reader = stream.getReader();
//   try {
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) {
//         return;
//       }
//       yield value;
//     }
//   } finally {
//     reader.releaseLock();
//   }
// }
// // Fetches data from url and calculates response size using the async generator.
// async function getResponseSize(url) {
//   const response = await fetch(url);
//   // Will hold the size of the response, in bytes.
//   let responseSize = 0;
//   // The for-await-of loop. Async iterates over each portion of the response.
//   for await (const chunk of streamAsyncIterator(response.body)) {
//     console.log(chunk);
//     // Incrementing the total response length.
//     responseSize += chunk.length;
//   }

//   console.log(`Response Size: ${responseSize} bytes`);
//   // expected output: "Response Size: 1071472"
//   return responseSize;
// }
// getResponseSize("https://jsonplaceholder.typicode.com/photos");
