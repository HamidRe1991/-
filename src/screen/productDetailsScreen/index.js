import React, { Component } from 'react';
import { View, StyleSheet, Text , Button } from 'react-native';
import { Content } from 'native-base'
import ProductImagesSlider from './Components/productImagesSlider'
import allStyle from '../../config/Style/all.Style'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import {addToCartAction} from '../../redux/actions/cartAction'
class productDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderDetails(index, item) {
        return (
            <View key={index} style={styleDetail.itemContainer}>
                <Text style={[styleDetail.answer, allStyle.text, { width: '50%' }]}>{item.answer}</Text>
                <Text style={[styleDetail.question, allStyle.text, { width: '50%' }]}>{item.question}</Text>
            </View>
        )
    }
    render() {
        const { navigation } = this.props;
        const productData = navigation.getParam('productData');
        return (
            <Content style={{ backgroundColor: '#fff' }}>
                <View>
                    <ProductImagesSlider imageData={productData.images} />
                </View>

                
                <Text style={allStyle.mainTitel}>{productData.title}</Text>
                <Text style={[allStyle.textPrice , styleDetail .price]}>{productData.price}</Text>
                <View>
                    <Text style={allStyle.secendTitle}>ویژگی های محصول</Text>
                    <View style={styleDetail.container}>
                        {
                            productData.details.map((item, index) => {
                                return this.renderDetails(index, item)
                            })
                        }
                    </View>
                    <View>
                        <Button
                        full 
                        success
                        title = 'افزودن به سبد خرید'
                        style = {allStyle.text} 
                        onPress =  {async ()=>{
                            const {addFromCart , navigation} = this.props ; 
                            await addFromCart(productData) ; 
                            navigation.navigate('Cart')
                        }}
                        />
                        
                    </View>
                </View>
            </Content>
        );
    }
}

const styleDetail = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        padding: 10
    },
    itemContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    question: {
        color: 'green',
        fontSize: 16,
        fontFamily: 'BYekan+',
        marginRight: 40,
        marginTop: 5
    },
    answer: {
        color: 'blue'
        , fontSize: 16
        , fontFamily: 'BYekan+',
        marginLeft: 20,
        marginTop: 5

    } , 
    price :{
        color : 'green' , 
        justifyContent : 'center' , 
        alignItems : 'center'
    }
})
mapDispachToProps = dispach => ({
    addFromCart : product => dispach(addToCartAction(product))
}) ; 
export default connect(null , mapDispachToProps)(withNavigation(productDetailsScreen));