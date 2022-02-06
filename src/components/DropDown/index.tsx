import React, { useState } from "react";
import styled from "styled-components";
import { LIST } from "../ExchangeList/data";
import { IList } from "../../interface/rateInfo";

interface IProps {
  select: (nation: string) => void;
}

const DropDown = ({ select }: IProps) => {
  const [onPopup, setOnPopup] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<IList>({
    id: 0,
    name: "유로",
    nation: "EUR",
    plag: "EUR",
  });

  const selectNation = (item: IList) => {
    select(item.nation);
    setSelectValue(item);
  };

  return (
    <Container onClick={() => setOnPopup(!onPopup)}>
      <NationBox>
        <div>
          <img
            src={`https://finance.daum.net/images/flag/${selectValue.plag}.png`}
            alt="국기"
          />
          <span>{selectValue.name}</span>
          <span>{selectValue.nation}</span>
        </div>

        {onPopup ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </NationBox>

      {onPopup && (
        <ListBox>
          {LIST.filter((x) => x.name !== selectValue.name).map((x) => (
            <Content key={x.id} onClick={() => selectNation(x)}>
              <img
                src={`https://finance.daum.net/images/flag/${x.plag}.png`}
                alt="국기"
              />
              <span>{x.name}</span>
              <span>{x.nation}</span>
            </Content>
          ))}
        </ListBox>
      )}
    </Container>
  );
};
export default DropDown;

const Container = styled.div`
  position: relative;
`;

const NationBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  width: 20%;
  img {
    width: 30px;
    height: 18px;
    vertical-align: text-top;
  }

  span {
    margin-left: 10px;
    &:nth-of-type(1) {
      font-size: 17px;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.blackLighter};
    }
  }
`;

const ListBox = styled.div`
  position: absolute;
  top: 28px;
  left: 5px;
  width: 20%;
  padding: 0px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
`;

const Content = styled(NationBox)`
  justify-content: flex-start;
  width: 100%;
  padding: 10px 5px 5px 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;
