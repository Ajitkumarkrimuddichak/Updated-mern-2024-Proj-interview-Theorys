export const transformData = (data) => {
  // Transform data logic here
  return data.map((item) => ({ ...item, transformed: true }));
};
