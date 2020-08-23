import React from 'react';
import { Link } from 'react-router-dom';

export default function BubbleButton() {
  return (
    <div>
      <Link to={'/quiz'}>
        <svg className="bubble-button">
          <defs>
            <linearGradient id="bubble-button-gradient">
              <stop offset="0%" stopColor="#FF7521" />
              <stop offset="100%" stopColor="#FFB421" />
            </linearGradient>
            <filter
              id="bubble-button-shadow"
              x="0"
              y="0"
              width="120%"
              height="120%"
            >
              <feOffset result="offOut" in="SourceAlpha" dx="6" dy="8" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
              <feBlend in="SourceGraphic" in2="blurOut" />
            </filter>
          </defs>
          <g transform="translate(120,70) ">
            <path
              fill="url(#bubble-button-gradient)"
              filter="url(#bubble-button-shadow)"
              d="M51.6,-45.6C61.8,-28.3,61.7,-7.1,55.1,9C48.6,25.1,35.7,36.2,21.3,42.5C6.9,48.8,-9,50.3,-21.5,44.4C-34,38.5,-43.1,25.2,-50.5,7.4C-57.9,-10.5,-63.6,-32.9,-54.9,-49.8C-46.2,-66.8,-23.1,-78.3,-1.2,-77.3C20.7,-76.4,41.4,-62.9,51.6,-45.6Z"
            />
            <text
              fill="#fff"
              alignmentBaseline="middle"
              textAnchor="middle"
              fontSize="18"
              y="0"
              fontWeight="bold"
            >
              Take a quiz
            </text>
          </g>
        </svg>
      </Link>
    </div>
  );
}
