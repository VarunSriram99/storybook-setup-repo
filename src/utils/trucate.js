const truncate = (str, length) => {
  return str && str.length > length
    ? str.substring(0, length - 3) + "..."
    : str;
};

export default truncate;
