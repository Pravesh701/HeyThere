import React from 'react'
import MapboxGL from '@rnmapbox/maps';
import { Text, View } from 'react-native'

import styles from "./styles";

type Props = {}

MapboxGL.setAccessToken('sk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcmQ3bjIwbjVyM3BxbXpvc2hoa256In0.P6BItRAHXDpuag3cH9y7tw'); // default public token "pk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcWE1Z2IwdmNkM3BtdDl6Z3VrbzYzIn0.mUgvVnDDkGKiM5e3fiVFiQ"
// MapboxGL.setConnected(true);

const Map = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <MapboxGL.MapView style={styles.map} />
            </View>
        </View>
    )
}

export default Map

// HeyThere token = "sk.eyJ1IjoicHJhdmVzaDcwMSIsImEiOiJjbGNrcmQ3bjIwbjVyM3BxbXpvc2hoa256In0.P6BItRAHXDpuag3cH9y7tw"