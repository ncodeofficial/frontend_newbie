/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IRate } from "../../interface/rateInfo";
import { COLUMNS } from "./data";
import { Table } from "antd";
import "antd/es/table/style/css";

interface IList {
  key: number;
  nation: React.ReactNode;
  currency: string;
  salesStandard: number;
  compare: string;
  fluctuation: string;
  buy: number;
  sell: number;
  send: number;
  receive: number;
}

interface IFlag {
  [index: string]: string;
  EUR: string;
  JPY: string;
  CNY: string;
}

const flag: IFlag = {
  EUR: "EUR",
  JPY: "JPN",
  CNY: "CHN",
};

const ExchangeList = ({ rateList }: { rateList: IRate[] }) => {
  const [list, setList] = useState<IList[]>([]);

  useEffect(() => {
    rateList.forEach((rateInfo, index) => {
      setList([
        ...list,
        {
          key: index,
          nation: (
            <NationBox>
              <img
                src={`https://finance.daum.net/images/flag/${
                  flag[rateInfo.currencyCode]
                }.png`}
                alt="국기"
              />
              {rateInfo.country}
            </NationBox>
          ),
          currency: rateInfo.currencyName,
          salesStandard: rateInfo.basePrice,
          compare: rateInfo.changePrice + " 원",
          fluctuation:
            rateInfo.basePrice - rateInfo.openingPrice > 0
              ? "▲"
              : "▼" +
                ((rateInfo.changePrice / rateInfo.basePrice) * 100).toFixed(2) +
                "%",
          buy: rateInfo.cashBuyingPrice,
          sell: rateInfo.cashSellingPrice,
          send: rateInfo.ttSellingPrice,
          receive: rateInfo.ttBuyingPrice,
        },
      ]);
    });
  }, [rateList]);

  return (
    <Container>
      <Cell columns={COLUMNS} dataSource={list} pagination={false} />
    </Container>
  );
};

export default ExchangeList;

const Container = styled.div`
  padding: 0px 10px;
`;

const Cell = styled(Table)`
  .ant-table-thead .ant-table-cell {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.blackLighter};
  }

  .ant-table-tbody .ant-table-cell {
    font-size: 14px;
  }
`;

const NationBox = styled.div`
  img {
    width: 26px;
    height: 14px;
    margin-right: 10px;
    vertical-align: text-top;
  }
`;
