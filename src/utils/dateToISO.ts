interface IDate {
  day: number;
  month: number;
  year: number;
}

export const dateToISO = (date: IDate) => {
  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};
