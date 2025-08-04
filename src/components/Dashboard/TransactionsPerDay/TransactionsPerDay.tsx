import React from "react";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import DataChart from "@/components/DataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className="flex ml-[220px]">
      <Paper className="block py-4 px-8 w-[100%] lg:flex">
        <div className="lg:w-[800px] max-w-full w-[270px] hidden lg:block">
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className="flex flex-row lg:flex-col justify-evenly max-w-[20%] lg:max-w-[500px] h-[100%] ">

          <Card className="text-center p-2 lg:p-4 rounded-xl w-[215px] min-w-[80px] " variant={"outlined"}>
            <div className="text-3xl">
              <Typography>Total Products</Typography>
            </div>
            <div className="text-[1.2rem] ">
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </div>
          </Card>

          <Card className="text-center p-2 lg:p-4 rounded-xl w-[215px] min-w-[80px] " variant={"outlined"}>
            <div className="text-3xl">
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className="text-[1.2rem]">
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.4%
              </Typography>
            </div>
          </Card>
          <Card className="text-center p-2 lg:p-4 rounded-xl w-[215px] min-w-[80px] " variant={"outlined"}>
            <div className="text-3xl">
              <Typography>Refunds</Typography>
            </div>
            <div className="text-[1.2rem]">
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;