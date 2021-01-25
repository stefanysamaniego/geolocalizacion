import React,{Component} from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import MapView from 'react-native-maps';


const{width,height}=Dimensions.get('window')
export default class App extends Component {

  constructor(){
    super()
    this.state={
      region:{
        latitude:null,
        longitude:null,
        latitudeDelta:null,
        longitudeDelta:null
      }
    }
  }
  calcDelta(lat,lon,accuracy){
    const oneDegreeOfLongidInMeters=111.32;
    const circunference=(40075 / 360)

    const latDelta= accuracy *(1 / (Math.cos(lat)* circunference))
    const lonDelta = (accuracy / oneDegreeOfLongidInMeters)

    this.setState({
      region: {
        latitude:lat,
        longitude:lon,
        latitudeDelta:latDelta,
        longitudeDelta:lonDelta
      }
    })
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const lat=position.coords.latitude
        const lon=position.coords.longitude
        const accuracy=position.coords.accuracy
        alert(JSON.stringify(position))
        this.calcDelta(lat,lon,accuracy)
      }
    )
  }
  
  Marker(){
    return{
      latitude:this.state.region.latitude,
      longitude:this.state.region.longitude,
      
    }
  }
  render(){
  return (
    <View style={styles.container}>
      {this.state.region.latitude ? <MapView 
      style={styles.map}
      initialRegion={this.state.region}
      >
        <MapView.Marker
        coordinate={this.Marker()}
        title="im here"
        description="home"
        />
      </MapView>: null }
      
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    flex:1,
    width:width,
    
    
   
  }
});
