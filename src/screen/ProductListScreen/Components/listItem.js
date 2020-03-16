import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation'
class listItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { id, imagePath, title } = this.props.itemData;
        return (
            <View style={listItemStyle.container}>
                <View style={[listItemStyle.colcontainer, { width: '10%' }]}>
                    <Icon  
                    style = {listItemStyle.cartIcon}
                    name = "cart"
                    onPress = {()=>{
                        const {navigate} = this.props.navigation ; 
                        navigate ("Details" , {
                            productData: this.props.itemData
                        })
                    }}
                    />
                </View>
                <View style={[listItemStyle.colcontainer, { width: '65%' }]}>
                    <Text style = {listItemStyle.title}>{title}</Text>
                </View>

                <View style={[listItemStyle.colcontainer, { width: '25%' }]}>
                    <Image
                        source={{ uri:imagePath }}
                        style={listItemStyle.image}
                    />
                </View>

                

            </View>
        );
    }
}

const listItemStyle = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'green'
        },
        colcontainer: {
            justifyContent: 'center',
            alignItems: 'center' 
        },
        title: {
            fontFamily: 'BYekan+',
            fontSize: 15,
            color: 'black' ,
            marginRight : 10 , 
            marginLeft : 10
        },
        image: {
            width: 100,
            height: 100 , 
            justifyContent : 'center' , 
            alignItems : 'center'
        } , 
        cartIcon :{
            fontSize : 20, 
            color : '#fff' , 
            width : 30 , 
            height : 30 , 
            backgroundColor : '#000000c9' , 
            borderRadius : 20 , 
            textAlign : 'center' , 
            textAlignVertical : 'center'
        }
    }
)

export default withNavigation(listItemComponent);