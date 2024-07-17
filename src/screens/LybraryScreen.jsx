import { SafeAreaView, } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";

import styles from "../theme/app-theme";

const LybraryScreen = () => {
  
    return (
      <SafeAreaView style={styles.containerGeneral}>
          <ScrollView >
            <Text>HOLA</Text>
          </ScrollView>
      </SafeAreaView>
    );
  };

  export default LybraryScreen;