import React from 'react'
import MapboxGL from '@rnmapbox/maps';
import { Text, View, LogBox, SafeAreaView } from 'react-native';

import styles from "./styles";
const IS_ANDROID = "";

type Props = {}
MapboxGL.setWellKnownTileServer(MapboxGL.TileServers.Mapbox); //MapboxGL.setWellKnownTileServer(Platform.OS === 'android' ? 'Mapbox' : 'mapbox')
MapboxGL.setAccessToken('sk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcmQ3bjIwbjVyM3BxbXpvc2hoa256In0.P6BItRAHXDpuag3cH9y7tw'); // default public token "pk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcWE1Z2IwdmNkM3BtdDl6Z3VrbzYzIn0.mUgvVnDDkGKiM5e3fiVFiQ"
// MapboxGL.setConnected(true);

const MyMap = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <MapboxGL.MapView
                    style={styles.map}
                    logoEnabled={false}
                />
            </View>
        </View>
    )
}

class Map extends React.Component {
    constructor(props: any) {
        super(props);
    }
    state = {
        isFetchingAndroidPermission: IS_ANDROID,
        isAndroidPermissionGranted: false,
        activeExample: -1,
    };

    async componentDidMount() {
        if (IS_ANDROID) {
            const isGranted = await MapboxGL.requestAndroidLocationPermissions();
            this.setState({
                isAndroidPermissionGranted: isGranted,
                isFetchingAndroidPermission: false,
            });
        }
    }

    render() {
        if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
            if (this.state.isFetchingAndroidPermission) {
                return null;
            }
            return (
                <SafeAreaView
                // style={[sheet.matchParent, { backgroundColor: colors.primary.blue }]}
                // forceInset={{ top: 'always' }}
                >
                    <View
                    // style={sheet.matchParent}
                    >
                        <Text style={styles.noPermissionsText}>
                            You need to accept location permissions in order to use this
                            example applications
                        </Text>
                    </View>
                </SafeAreaView>
            );
        }
        return <MyMap />;
    }
}

export default Map

// HeyThere token = "sk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcmQ3bjIwbjVyM3BxbXpvc2hoa256In0.P6BItRAHXDpuag3cH9y7tw"