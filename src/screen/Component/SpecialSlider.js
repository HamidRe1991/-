import React, { Component } from 'react';
import { View , Text , Image ,Dimensions , StyleSheet } from 'react-native';
import Carousel  from 'react-native-snap-carousel' ;
import sliderData  from '../../global/SampleData/SalideData'
import {Right , Header} from 'native-base'
const  screenWidth = Dimensions.get('window').width ; 
const itemWidth = 500 ;
const itemHeigth = 220 ;
class SpecialSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    renderItem({item , index}){
        return(
            <View style = {stlyeSlider.slideContainer}>
                <Image  source = {{uri : item.imagePath}} style = {stlyeSlider.slide}/>
            </View>
        )
    }
    render() {
        return (
           <Carousel  
           data = {sliderData}
           renderItem = {this.renderItem} 
           sliderWidth= {screenWidth}
           itemWidth = {itemWidth}
           /> 
        );
    }
}

const stlyeSlider = StyleSheet.create({
    slideContainer : {
        width : itemWidth , 
        height : 220 , 
        marginTop : 10 , 
        marginBottom : 10 
    } , 
    slide:{
        width : '100%' , 
        height : itemHeigth , 
        borderRadius : 20 , 
        flex : 1 , 
        flexDirection : 'row' , 
        justifyContent : 'center' , 
        alignItems : 'stretch' , 
        resizeMode : 'stretch'
    }
})
export default SpecialSlider;