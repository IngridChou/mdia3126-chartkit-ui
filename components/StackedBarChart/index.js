import { View, Text, Dimensions } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function Stacked() {

    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
            [60, 60, 60],
            [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    };

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2,
        barpercentage: 0.5,
        barRadius: 5,
        useShadowColorFromDataset: false
    }


    return (
        <View>
            <Text>Stacked Bar Chart</Text>
            <StackedBarChart
                style={{
                    marginVertical: 0,
                    borderRadius: 16
                }}
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )

}