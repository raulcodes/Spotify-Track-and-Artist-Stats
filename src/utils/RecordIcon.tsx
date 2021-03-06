import { makeStyles } from '@material-ui/core/styles';

import colors from './colors';

interface RecordIconProps {
  width: number;
}

const useStyles = makeStyles({
  '@keyframes rotation': {
    '100%': {
      '-webkit-transform': 'rotate(360deg)',
      transform: 'rotate(360deg)',
    },
  },
  record: {
    position: 'relative',
    width: (props: RecordIconProps) => `${props.width}vh`,
    '-webkit-animation': '$rotation 7s infinite linear',
    '-moz-animation': '$rotation 7s linear infinite',
    animation: '$rotation 7s linear infinite',
  },
});

const RecordIcon = ({ width, ...props }: RecordIconProps) => {
  const classes = useStyles({ width });
  return (
    <div className={classes.record}>
      <svg viewBox="0 0 96 96" {...props}>
        <defs>
          <style>{`.prefix__cls-1{fill:${colors.white}}`}</style>
        </defs>
        <title>{'Record Icon'}</title>
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <path
              className="prefix__cls-1"
              d="M48 0a48 48 0 1048 48A48 48 0 0048 0zm30.71 43.65a1 1 0 011.1.88 30.8 30.8 0 01.16 5 32.22 32.22 0 01-21.48 28.7 1 1 0 01-.33.06 1 1 0 01-.32-2A30.19 30.19 0 0078 49.43a29.25 29.25 0 00-.14-4.68 1 1 0 01.85-1.1zm-7.72 4a1 1 0 011 1 24 24 0 01-13.23 20.81 1 1 0 01-.45.1 1 1 0 01-.45-1.89A22 22 0 0070 48.61a1 1 0 011-.97zM10 48a1 1 0 01-2 0A40 40 0 0148 8a1 1 0 010 2 38 38 0 00-38 38zm8.17-3.22a1 1 0 01-1 .89h-.11a1 1 0 01-.89-1.1 32.55 32.55 0 01.92-4.9 32.2 32.2 0 0127.15-23.45 1 1 0 11.23 2A30.2 30.2 0 0019 40.18a30.83 30.83 0 00-.83 4.6zm7.45-1.11h-.23a1 1 0 01-.74-1.2A24 24 0 0141.86 24.8a1 1 0 01.51 1.93A22 22 0 0026.6 42.9a1 1 0 01-.98.77zM32 48a16 16 0 1116 16 16 16 0 01-16-16zm49.7 21.51a39.73 39.73 0 01-25.08 17.55.78.78 0 01-.22 0 1 1 0 01-1-.78 1 1 0 01.76-1.19 38.06 38.06 0 0028.92-45.3 1 1 0 012-.43 39.69 39.69 0 01-5.38 30.15z"
            />
            <circle className="prefix__cls-1" cx={48} cy={48} r={2.5} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default RecordIcon;
