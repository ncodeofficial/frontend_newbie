export const comma = (str: string) => {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const uncomma = (str: string) => {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
};
