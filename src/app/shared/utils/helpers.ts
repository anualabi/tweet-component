export const formatTimeStamp = (timestamp: string) => {
  const stringToArray = timestamp.split(/-|\s|:/);
  const formatedTimeStamp = stringToArray.map((p) => Number(p));
  return formatedTimeStamp;
};
