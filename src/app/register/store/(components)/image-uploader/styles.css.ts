import { style } from '@vanilla-extract/css';
import { borderRadius, colors } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const styles = {
  container: style({
    marginTop: 15,
  }),
  uploadInputLabel: recipe({
    base: {
      border: '2px solid #d9d9d9',
      borderRadius: borderRadius.md,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    variants: {
      size: {
        full: { width: '100%', height: 160 },
        fit: { width: 110, height: 100 },
      },
    },
    defaultVariants: {
      size: 'full',
    },
  }),
  iconContainer: style({
    color: '#AEAEAE',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 1.4,
  }),
  imageList: style({
    display: 'flex',
    width: '100%',
    gap: 10,
    flexWrap: 'wrap',
  }),
  imageContainer: style({
    borderRadius: borderRadius.md,
    width: '31%',
    maxWidth: 110,
    height: 100,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'end',
  }),
  deleteButton: style({
    backgroundColor: colors.white,
    padding: 7,
    borderRadius: '100%',
    width: 22,
    height: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '2px 2px 4px #00000020',
    position: 'relative',
    top: -6,
    right: -6,
  }),
};
