function choice(arry) {
  let randomIdx = Math.floor(Math.random() * arry.length);
  return arry[randomIdx];
}

export { choice };
