const uid = () => {
  const ramdon = Math.random();
  const alphaNumeric = ramdon.toString(36);
  let uid = alphaNumeric.slice(2);
  return uid;
};
export {uid}
