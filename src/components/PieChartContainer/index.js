import { PieChart, Pie, Legend, Cell } from "recharts";

import "./index.css";

const COLORS = ["green", "red", "yellow"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartContainer(props) {
  const { success, failure, pending } = props;
  const data = [
    { name: "SUCCESS", value: success },
    { name: "FAILURE", value: failure },
    { name: "PENDING", value: pending },
  ];
  return (
    <>
      <h3 className="mt-3">Total Submits Status</h3>
      <PieChart width={400} height={350}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
      </PieChart>
    </>
  );
}

// const PieChartContainer = (props) => {
//   const { submits, success, failure, pending } = props;
//   const smscData = [
//     { success: "SUCCESS", count: success },
//     { failure: "FAILURE", count: failure },
//     { pending: "PENDING", count: pending },
//   ];
//   return (
//     <div className="pie-chart-container">
//       <h1>Total Submits Status</h1>
//       <div className="pie-chart-responsive-container">
//         <PieChart width={250} height={300}>
//           <Legend
//             iconType="circle"
//             layout="horizontal"
//             verticalAlign="bottom"
//             align="center"
//           />
//           <Pie
//             cx="70%"
//             cy="40%"
//             data={smscData}
//             innerRadius="0%"
//             outerRadius="60%"
//             dataKey="count"
//           >
//             <Cell name="success" fill="green" />
//             <Cell name="failure" fill="red" />
//             <Cell name="pending" fill="yellow" />
//             <LabelList dataKey="count" position="bottom" />
//           </Pie>
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default PieChartContainer;
