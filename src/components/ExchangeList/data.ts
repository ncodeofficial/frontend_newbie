export const COLUMNS = [
  {
    title: "국가명",
    dataIndex: "nation",
    key: "nation",
  },
  {
    title: "통화",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "매매기준율",
    dataIndex: "salesStandard",
    key: "salesStandard",
  },
  {
    title: "전일비",
    key: "compare",
    dataIndex: "compare",
  },
  {
    title: "등락률",
    key: "fluctuation",
    dataIndex: "fluctuation",
  },
  {
    title: "사실때",
    key: "compare",
    dataIndex: "buy",
  },
  {
    title: "파실때",
    key: "sell",
    dataIndex: "sell",
  },
  {
    title: "보내실때",
    key: "send",
    dataIndex: "send",
  },
  {
    title: "받으실때",
    key: "receive",
    dataIndex: "receive",
  },
];

export const LIST = [
  { id: 0, name: "유로", nation: "EUR", plag: "EUR" },
  { id: 1, name: "일본", nation: "JPY", plag: "JPN" },
  { id: 2, name: "중국", nation: "CNY", plag: "CHN" },
];
