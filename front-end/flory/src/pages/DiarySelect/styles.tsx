import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  background: rgb(254, 219, 217);
  background: linear-gradient(
    135deg,
    rgba(254, 219, 217, 1) 0%,
    rgba(186, 205, 222, 1) 100%
  );
  padding-top: 10%;
  overflow: hidden;

  .info__wrapper {
    & > p {
      font-size: 0.8rem;
    }
    width: 90%;
    text-align: center;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 1rem 0.8rem;
  }

  .emotion {
    width: 90%;
    text-align: center;
    margin: 2rem auto;
    font-size: 1.6rem;
    background: linear-gradient(#bd00ff 0%, #ff00d6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  /* Carousel */
  .wrapper {
    display: flex;
    justify-content: center;
    height: 16rem;
  }

  img {
    width: 22rem;
  }

  .carousel {
    position: relative;
    width: 55%;
    perspective: 500px;
    transform-style: preserve-3d;
  }

  .card-container {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--offset) * 50deg))
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
    border-radius: 1rem;
    color: #9ca3af;
    text-align: justify;
    transition: all 0.3s ease-out;

    h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 0 0.7em;
      color: #1f2937;
    }

    p,
    h2 {
      transition: all 0.3s ease-out;
      opacity: var(--active);
    }
  }

  .nav {
    color: white;
    font-size: 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;

    &.left {
      transform: translateX(-100%) translatey(-50%);
    }

    &.right {
      right: 0;
      transform: translateX(100%) translatey(-50%);
    }
  }
`;
