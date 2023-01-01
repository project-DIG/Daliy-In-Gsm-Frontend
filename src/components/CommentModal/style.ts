import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Bg = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  z-index: 6;
`;

export const Modal = styled.div<{ commentModal: boolean }>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: 1s;
  animation: ${e =>
    e.commentModal
      ? css`
          ${openComment} 1s ease
        `
      : ``};
  bottom: 0;
  width: 460px;
  height: 720px;
  border-radius: 10px;
  background-color: white;
  z-index: 8;
  text-align: center;
`;

const openComment = keyframes`
    from{
      bottom: -100%;
    }
    to{
      bottom: 0;
    }
`;

export const Comment = styled.div`
  margin-top: 40px;
  font-family: 'IBM Plex Sans KR';
  font-weight: 400;
  font-size: 24px;
`;
export const CommentInputWrap = styled.div`
  display: flex;
  width: 80%;
  margin: 30px auto;
`;
export const CommentInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  width: 80%;
  height: 30px;
  font-size: 16px;
  font-family: 'IBM Plex Sans KR';
`;

export const Button = styled.button`
  margin-top: 4px;
  width: 70px;
  height: 30px;
  background-color: #9fb6ee;
  border-radius: 4px;
  outline: none;
  border: 1px solid #7e9ce8;
  font-family: 'IBM Plex Sans KR';
  &:hover {
    background-color: white;
    color: #7e9ce8;
    transition: 0.3s;
    transform: translateY(-4px);
    box-shadow: 0 3px 0 #7e9ce8;
  }
  &:active {
    transition: 0s;
    transform: translateY(0);
    box-shadow: inset 0 2px 2px #7e9ce8;
  }
`;