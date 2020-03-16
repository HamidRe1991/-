import React, { Component } from 'react';
import { View, Text } from 'native-base';
import productData from '../../global/SampleData/productData'
import { List } from '../../Components'
import allStyle from '../../config/Style/all.Style'
class ProductListScreen extends Component {
    static navigationOptiaons = ((navigation)=>{
        return {
            title:navigation.getParam('CategoryName' , 'لیست محصولات')
        }
    })
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { navigation } = this.props;
        const categoryName = navigation.getParam('CategoryName')
        return (
             <View>
                <Text style={allStyle.mainTitel}>محصولات مربوط به دسته {categoryName}</Text>
                <List
                    data={productData}
                />
            </View>
        );
    }
}

export default ProductListScreen;