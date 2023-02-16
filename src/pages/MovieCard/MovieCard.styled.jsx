import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  display: block;
`;

export const Box = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 15px;
`;
export const BoxCard = styled.div`
  margin-left: 10px;
`;

export const LinkBtn = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &:focus {
    color: white;
    background-color: #ce5e36;
  }
`;
export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
`;
export const TitleCategory = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const AdittionalBlock = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 16px;
  padding: 20px 20px;

  color: black;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TitleAdittional = styled.h3`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const ItemAdittional = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
`;
