import { View, Text, Button } from "react-native";
import { Divider } from "@rneui/base";
import styles from "../theme/app-theme";
import React from "react";

const HeaderComponent = ({ title, subtitle }) => {
  return (
    <View style={styles.viewHeaderGeneral}>
      <Text style={styles.textTitle}>{title}</Text>
      <Divider style={styles.divider} />
      <View style={styles.viewHeaderInsideGeneral}>
        <Text style={styles.textSubtitle}>{subtitle}</Text>
        <Button  title="See All"/>
      </View>
    </View>
  );
};

export default HeaderComponent;
