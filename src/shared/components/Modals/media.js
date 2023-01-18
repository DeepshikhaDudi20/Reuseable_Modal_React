import { css } from "styled-components";

const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768
};

// This file could be imported to configure styles
// based on device type ( as part of improvement)
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
