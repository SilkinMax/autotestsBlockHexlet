const set = (obj, key, value) => {
  if (obj[key] === undefined) {
    obj[key] = value;
  }
};
export default set