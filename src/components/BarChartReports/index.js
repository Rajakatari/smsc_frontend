import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import UserContext from "../../context/UserContext";
import { BarChartMainContainer } from "./styledComponent";

export default function BarChartReports() {
  return (
    <UserContext.Consumer>
      {(value) => {
        const { userWiseData, isDark } = value;
        return (
          <BarChartMainContainer dark={isDark}>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                width={1000}
                height={500}
                data={userWiseData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Client" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="delivered" stackId="a" fill="green" />
                <Bar dataKey="undelivered" stackId="a" fill="red" />
                <Bar dataKey="error1" stackId="a" fill="yellow" />
                <Bar dataKey="error6" stackId="a" fill="blue" />
                <Bar dataKey="error21" stackId="a" fill="orange" />
                <Bar dataKey="error32" stackId="a" fill="#8c1aff" />
                <Bar dataKey="error34" stackId="a" fill="#ff0066" />
                <Bar dataKey="error51" stackId="a" fill="#33ffff" />
                <Bar dataKey="error69" stackId="a" fill="#ff6600" />
                <Bar dataKey="error247" stackId="a" fill="#00004d" />
                <Bar dataKey="error254" stackId="a" fill="black" />
              </BarChart>
            </ResponsiveContainer>
          </BarChartMainContainer>
        );
      }}
    </UserContext.Consumer>
  );
}
