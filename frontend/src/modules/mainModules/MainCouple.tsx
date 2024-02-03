import React from 'react';
import styled from 'styled-components';
import MainCoupleImg from '../../assets/img/main_couple.svg';
import { BlinkCircle, Warn } from '../../config/IconName';
import Icon from '../../components/icon/Icon';

const StyledMainCoupleContainer = styled.div`
  width: 100%;
  height: 900px;
  background-color: #f2eeea;
  display: flex;
  column-gap: 75px;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const StyledTextContainer = styled.div`
  width: 37vw;
`;

const StyledSubTitle = styled.p`
  font-family: 'Pretendard Medium';
  color: #333333;
  letter-spacing: 4px;
  margin-bottom: 7px;
`;
const StyledTitle = styled.p`
  font-family: 'Pretendard Bold';
  font-size: 36px;
  color: #333333;
`;

const StyledContentsContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 10px;
`;

const StyledContents = styled.p`
  font-family: 'Pretendard Regular';
  font-size: 18px;
  color: #888;
  line-height: 27px;
`;

const StyledWarnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const StyledWarnText = styled.p`
  font-family: 'Pretendard Regular';
  font-size: 18px;
  color: #888;
  margin-left: 5px;
`;
const StyledSvg = styled.img`
  width: 40vw;
`;

const StyledCoupleTitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledCoupleTitle = styled.p`
  font-family: 'Pretendard Bold';
  font-size: 24px;
  color: #333;
  margin-left: 14px;
`;
const MainCouple = () => {
  return (
    <StyledMainCoupleContainer>
      <StyledTextContainer>
        <StyledSubTitle>Features</StyledSubTitle>
        <StyledTitle>서로를 알아볼까요?</StyledTitle>

        <StyledContentsContainer>
          <StyledCoupleTitleContainer>
            <Icon src={BlinkCircle} />
            <StyledCoupleTitle>매칭 후 시작되는 둘만의 이야기</StyledCoupleTitle>
          </StyledCoupleTitleContainer>

          <StyledContents>매칭된 커플은 1:1 채팅 또는 화상 서비스를 통해 서로를 더 알아가는 소중한 시간을 보낼 수 있습니다.</StyledContents>
          <StyledWarnContainer>
            <Icon src={Warn} />
            <StyledWarnText>주의</StyledWarnText>
          </StyledWarnContainer>
          <StyledContents>매칭이 되어 있는 동안 다른 소개팅 진행이 불가능합니다.</StyledContents>
        </StyledContentsContainer>
      </StyledTextContainer>
      <StyledSvg src={MainCoupleImg} alt='Main couple' />
    </StyledMainCoupleContainer>
  );
};

export default MainCouple;
