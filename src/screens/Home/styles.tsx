import { StyleSheet } from "react-native";

//Custom Imports
import color from "../../utils/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: color.yellow_light
    },
    buttonContainer: {
        backgroundColor: color.darkSkyBlue,
        justifyContent: "center",
        alignItems: "center",
        height: 44,
        width: "90%",
        borderRadius: 10
    },
    buttonText: {
        color: color.mediumBlack,
        fontWeight: "500",
        fontSize: 16
    }
})

export default styles;