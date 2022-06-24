const randomStr = () =>
  // Two strings are made in effort to minimize any chances on duplicate creations.
  (Math.random() + 1).toString(36).substring(5) +
  (Math.random() + 1).toString(36).substring(5);
export default randomStr;
