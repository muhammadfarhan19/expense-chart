import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
} from "recharts";

import dataJSON from "../db/data.json";

const BarChart: React.FC = () => {
  const data = dataJSON;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart width={100} height={100} data={data}>
        <Tooltip />
        <Bar
          dataKey="amount"
          fill="#8884d8"
          shape={<Rectangle fill="red" />}
          radius={[5, 5, 5, 5]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
