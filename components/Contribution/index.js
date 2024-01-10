import { View, Text, Dimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;


export default function Contribution() {
    const commitsData = [
        { date: "2017-01-02", count: 1 },
        { date: "2017-01-03", count: 2 },
        { date: "2017-01-04", count: 3 },
        { date: "2017-01-05", count: 4 },
        { date: "2017-01-06", count: 5 },
        { date: "2017-01-30", count: 2 },
        { date: "2017-01-31", count: 3 },
        { date: "2017-03-01", count: 2 },
        { date: "2017-04-02", count: 4 },
        { date: "2017-03-05", count: 2 },
        { date: "2017-02-30", count: 4 }
    ];

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
            <Text>Contribution Graph</Text>
            <ContributionGraph
                values={commitsData}
                endDate={new Date("2017-04-01")}
                numDays={105}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    )
}