/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */
/* eslint-disable */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Logo.css';

class Logo extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.className !== this.props.className;
  }

  render() {
    const className = classNames(styles.root, this.props.className);

    return (
      <svg viewBox="0 0 360 360" className={className}>
        <defs>
          <linearGradient id="a" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop stopColor="#3D01A4" offset="0%" />
            <stop stopColor="#8601B0" offset="100%" />
          </linearGradient>
          <path id="b" d="M52.76 52.76c-70.346 70.343-70.346 184.137 0 254.48 70.343 70.346 184.137 70.346 254.48 0 70.346-70.343 70.346-184.137 0-254.48-70.343-70.346-184.137-70.346-254.48 0zm41.378 41.378c47.586-48.62 124.138-48.62 172.76 0 47.585 47.586 47.585 124.138 0 172.76L180 352.758v-50.69c-31.034 0-62.07-11.38-85.862-35.17-48.62-48.623-48.62-125.175 0-172.76z" />
          <filter id="c" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetInner1" />
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowInnerInner1" />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <use fill="url(#a)" xlinkHref="#b" />
          <use fill="#000" filter="url(#c)" xlinkHref="#b" />
        </g>
      </svg>
    );
  }
}

export default Logo;