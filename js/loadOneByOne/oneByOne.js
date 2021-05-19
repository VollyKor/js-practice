const leftBtn = document.getElementById(1);
const rightBtn = document.getElementById(2);
const rootRef = document.getElementById("root");

// Example 1
// const addPicToDom = async (src) => {
//   const res = await (await fetch(src)).json();
//   const { message } = res;

//   const img = document.createElement("img");
//   img.src = message;
//   img.style.width = "100px";
//   img.style.display = "block";
//   rootRef.appendChild(img);
// };

// const arr = [
//   "https://dog.ceo/api/breed/akita/images/random",
//   "https://dog.ceo/api/breed/australian/shepherd/images/random",
//   "https://dog.ceo/api/breed/hound/plott/images/random",
// ];

// async function methodName() {
//   for (let i of arr) {
//     await addPicToDom(i);
//   }
// }
// await methodName();
