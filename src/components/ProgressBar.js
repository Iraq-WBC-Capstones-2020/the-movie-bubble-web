import React from 'react';
import { color } from 'd3-color';
import PropTypes from 'prop-types';
import LiquidFillGauge from 'react-liquid-gauge';

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default function ProgressBar({ progress, width, height }) {
  const gradientStops = [
    {
      key: '0%',
      stopColor: color('#FF7521').toString(),
      stopOpacity: 1,
      offset: '.117',
    },
    {
      key: '100%',
      stopColor: color('#FFB421').toString(),
      stopOpacity: 1,
      offset: '0.908',
    },
  ];

  return (
    <LiquidFillGauge
      width={width}
      height={height}
      value={progress}
      percent="%"
      textSize={1}
      riseAnimation
      waveAnimation
      waveFrequency={2}
      waveAmplitude={2}
      gradient
      gradientStops={gradientStops}
      textStyle={{
        fill: color('white').toString(),
      }}
      waveTextStyle={{
        fill: color('#1D2530').toString(),
      }}
      circleStyle={{
        fill: color('transparent').toString(),
      }}
    />
  );
}
