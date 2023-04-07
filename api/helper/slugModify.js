export const slugModify = (string) => {
  return string.toLowerCase().replace(/[^\w]/g, '-');
};
