import React from "react";
import styled from "styled-components";
import { IRate } from "../../interface/rateInfo";

const ExchangeInfo = ({ rateInfo }: { rateInfo: IRate }) => {
  return (
    <InfoContainer>
      <SalesStandardBox>
        <h1>매매 기준율 </h1>
        <div>
          <span>{rateInfo.basePrice}</span>
          <span>
            {rateInfo.basePrice - rateInfo.openingPrice > 0 ? "▲" : "▼"}
            {rateInfo.changePrice}
          </span>
          &nbsp;
          <span>
            {rateInfo.basePrice - rateInfo.openingPrice > 0 ? "+" : "-"}
            {((rateInfo.changePrice / rateInfo.basePrice) * 100).toFixed(2) +
              "%"}
          </span>
        </div>
      </SalesStandardBox>
      <InfoTable>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th colSpan={2}>현찰</th>
            <th colSpan={2}>송금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>사실때</th>
            <td>{rateInfo.cashBuyingPrice}</td>
            <th>보낼때</th>
            <td>{rateInfo.cashSellingPrice}</td>
          </tr>
          <tr>
            <th>파실때</th>
            <td>{rateInfo.ttSellingPrice}</td>
            <th>받을때</th>
            <td> {rateInfo.ttBuyingPrice}</td>
          </tr>
        </tbody>
      </InfoTable>
      <div></div>
    </InfoContainer>
  );
};

export default ExchangeInfo;

const InfoContainer = styled.div`
  width: 100%;
  padding: 10px;
`;

const SalesStandardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 15px;
    &:nth-of-type(1) {
      margin-right: 10px;
      font-size: 32px;
    }
  }
`;

const InfoTable = styled.table`
  width: 100%;
  margin-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  col {
    width: 25%;
  }

  thead {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 14px;
    font-weight: 700;
    th {
      padding: 10px 0px;
      text-align: center;
    }
  }

  tbody {
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    font-size: 14px;

    th {
      padding: 20px 4px 3px 16px;
      color: ${({ theme }) => theme.colors.blackLight};
    }

    td {
      padding: 20px 4px 10px 16px;

      &:nth-of-type(1) {
        border-right: 1px solid ${({ theme }) => theme.colors.border};
      }
    }
  }
`;
