export const dateToUnix = (date: string) => {
  return (new Date(date).getTime() / 1000).toString();
};

export const unixToDateHuman = (unix: string) => {
  const date = new Date(Number(unix) * 1000);
  return `${date.toDateString()} ${date.toLocaleTimeString()}`;
};

export const unixToStringDate = (unix: string) => {
  const date = new Date(Number(unix) * 1000);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes;
};
