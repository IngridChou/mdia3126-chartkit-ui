import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Line() {

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [ 
                    // start 0 and the end: 100 - 1 = 99
                    Math.random() * 100, 
                    Math.random() * 100, 
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                ],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        styles: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: 2,
            stroke: "#ffa726"
        }
    }

    return (
        <View>
            <Text>Line Chart</Text>
            <LineChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                xAxisLabel="k"
                yAxisInterval={1}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}