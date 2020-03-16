import React from 'react'
import allStyle from '../../config/Style/all.Style'
import { StyleSheet, Image } from 'react-native';
import Colors from '../../config/Style/Colors'
import { connect } from 'react-redux'
import { Icon, Text, View, Content, Card, CardItem, Body } from 'native-base'
import { cartStorage } from '../../redux/storage'
import { deleteFromCartAction } from '../../redux/actions/cartAction'

class CartScreen extends React.Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cart" style={{ fontSize: 20, color: tintColor }} />
        )
    }


    constructor(props) {
        super(props);
        this.state = {};
    }

    renderCartItem(index, item) {
        const { id, imagePath, title } = item;
        return (
            <Card key={index}>
                <CardItem bordered>
                    <Body>
                        <View style={styleCart.cartItemContainer}>
                            <View style={[styleCart.colcontainer, { width: '70%' }]}>
                                <Text style={styleCart.title}>{title}</Text>
                            </View>

                            <View style={[styleCart.colcontainer, { width: '30%' }]}>
                                <Image
                                    source={{ uri: imagePath }}
                                    style={styleCart.image}
                                />
                            </View>

                        </View>
                    </Body>
                </CardItem>
                <CardItem footer bordered >
                    <Icon
                        name="trash"
                        style={styleCart.trash}
                        onPress={() => {
                            this.props.deleteFromCart(id)
                        }}
                    />
                    <Icon
                        name="eye"
                        style={styleCart.preView}
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Details', {
                                productData: item
                            })
                        }}
                    />
                </CardItem>
            </Card>
        )
    }

    render() {
        const { cart } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={styleCart.totalPriceContainer}>
                    <Text style={styleCart.totalPriceText}>25000</Text>
                    <Text style={styleCart.totalPriceText}>  جمع کل خرید :</Text>

                </View>

                <Content>
                    {
                        cart != '' ?
                            cart.map((item, index) => {
                                return this.renderCartItem(index, item)
                            })
                            :
                            <View>
                                <Text style={styleCart.emptyLabel}>سبد خرید خالی است</Text>
                            </View>
                    }
                </Content>
            </View>
        )
    }
}

const styleCart = StyleSheet.create({
    totalPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 1
    },
    totalPriceText: {
        fontFamily: 'BYekan+',
        fontSize: 20,
        color: 'green',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 40,
        marginRight: 40

    },
    emptyLabelContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyLabel: {

        fontSize: 17,
        padding: 50
    },
    cartItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    colcontainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    trash: {
        fontSize: 20,
        color: 'red',
        marginLeft: 10,
        marginRight: 10
    },
    preView: {
        fontSize: 20,
        color: 'blue',
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontFamily: 'BYekan+',
        fontSize: 15,
        color: 'black',
        marginRight: 10,
        marginLeft: 10
    }
})
mapStateToProps = state => ({
    cart: state[cartStorage]
})
mapDispachToProps = dispach => ({
    deleteFromCart: productId => dispach(deleteFromCartAction(productId))
})
export default connect(mapStateToProps, mapDispachToProps)(CartScreen);