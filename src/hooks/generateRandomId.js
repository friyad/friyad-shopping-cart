const generateRandomId = (
  length = 6,
  str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
) => {
  let id = "";
  for (let i = 0; i < length; i++) {
    id += str[Math.floor(Math.random() * str.length)];
  }
  return id;
};

export default generateRandomId;
