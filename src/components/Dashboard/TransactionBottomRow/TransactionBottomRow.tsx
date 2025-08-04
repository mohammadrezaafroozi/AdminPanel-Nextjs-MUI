import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";


const TransactionBottomRow = () => {
  return (
    <Grid container className="grid grid-cols-1 gap-2 lg:grid-cols-4 my-2.5 ml-[220px]">
      <Grid>
        <Paper className="relative top-4 h-full w-[245px] ml-4 ">
          <p className="py-2 px-4">Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className="relative top-4 h-full w-[245px] ml-6 ">
          <p className="py-2 px-4">Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className="relative top-4 h-full w-[245px] ml-6 ">
          <p className="py-2 px-4">Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className="relative top-4 h-full w-[245px] ml-6 ">
          <p className="py-2 px-4">Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;