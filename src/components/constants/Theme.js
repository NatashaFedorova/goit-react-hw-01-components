export const theme = Object.freeze({
  colors: {
    grey: '#303030',
  },
  spacing: value => `${4 * value}px`,
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  fontSizes: {
    small: '20px',
    medium: '24px',
    large: '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    mediumPlus: '600',
    bolt: '700',
  },
});
