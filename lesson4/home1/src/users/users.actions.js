export const NEXT = 'PAGE/NEXT';
export const PREVIOUS = 'PAGE/PREVIOUS';

export const nextPage = () => ({
  type: NEXT,
});
export const previousPage = () => ({
  type: PREVIOUS,
});
