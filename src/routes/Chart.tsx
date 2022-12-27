import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart() {
    const {coinId}  = useOutletContext<ChartProps>();
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId), {refetchInterval: 10000});

    return <div>{isLoading ? (
            "Loading chart..."
        ) : (
            <ApexChart 
                type="line" 
                series={[
                    {
                        name: "price",
                        data: data?.map(price => price.close) as number[],
                    }
                ]}
                options={{
                    theme: {mode: "dark"},
                    chart: {
                        height: 300,
                        width: 500, 
                        toolbar: {
                            show: false,
                        },
                        background: "transparent",
                    },
                    grid: {show: false},
                    stroke: {
                        curve: "smooth",
                        width: 3 
                    },
                    yaxis: {
                        show: false,
                    },
                    xaxis: {
                        axisBorder: {show: false,},
                        labels: {show: false,datetimeFormatter: {month: "mmm 'yy"}},
                        type: "datetime",
                        axisTicks: {show: false,},
                        categories: data?.map((data) => new Date(parseInt(data.time_close) as number * 1000).toISOString()),
                    },
                    fill: {type: "gradient", gradient: {gradientToColors: ["#0be881"], stops: [0, 100]}, },
                    colors: ["#0fbcf9"],
                    tooltip: {
                        y: {
                            formatter: (value) => `$${value.toFixed(2)}`,
                        },
                    },
                }}>
            </ApexChart>)}
    </div>;
}
export default Chart;