import styled from 'styled-components';
import style from '../../assets/globalStyle';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  background: #fff;
  .before {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60%;
    background: ${style['theme-color']};
  }
  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    margin: auto;
    overflow: hidden;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style['theme-color']};
    }
  }
`;
