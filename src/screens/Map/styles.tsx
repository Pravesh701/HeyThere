import { StyleSheet } from "react-native";

//Custom Imports
import color from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: color.white
    },
    viewContainer: {
        height: 300,
        width: 300,
    },
    map: {
        flex: 1
    }
})

export default styles;