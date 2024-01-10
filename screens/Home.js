import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Bar from '../components/BarChart/index';
import Line from '../components/LineChart';
import Pie from '../components/PieChart';
import Contribution from '../components/Contribution';
import Progress from '../components/ProgressChart';
import Stacked from '../components/StackedBarChart';

export default function Home({navigation}) {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Bar />
            <Line />
            <Pie />
            <Contribution />
            <Progress />
            <Stacked />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
