import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Dimensions, ScrollView, TouchableHighlight } from 'react-native';
import { View, Text, Container, Content, Header, Right, Left } from 'native-base'
import CategorysData from '../../global/SampleData/CategoryData'
import { withNavigation } from 'react-navigation'
const itemWidth = ((Dimensions.get('window').width) / 2) - 10;
const itemHeigth = 150;
class Categorys extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderItem(index, item) {
        return (

            <TouchableHighlight key={index} style={styleCategory.box}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('ProductList',
                        {
                            CategoryName: item.categoryName
                        })
                }}
            >
                <ImageBackground source={{ uri: item.imagePath }} style={styleCategory.imageBackground}>
                    <View style={styleCategory.labelContainer}>
                        <Text style={styleCategory.label}>{item.categoryName}</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>

        )
    }
    render() {
        return (

            <Container>
                <Content>
                    <ScrollView>
                        <View style={styleCategory.container}>
                            {
                                CategorysData.map((item, index) => {
                                    return this.renderItem(index, item)
                                })
                            }
                        </View>
                    </ScrollView>
                </Content>
            </Container>

        );
    }
}
const styleCategory = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        width: itemWidth,
        height: itemHeigth,
        margin: 5,
        borderWidth: 5,
        borderColor: 'green',
        borderRadius: 10
    },
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 5
    },
    labelContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        backgroundColor: 'green'
    },
    label: {
        fontFamily: 'BYekan+ Bold',
        fontSize: 20,
        color: '#ffffff'

    }
})
export default withNavigation(Categorys);