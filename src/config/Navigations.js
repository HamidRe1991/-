import React from 'react'
import { Home, Profile, Search, Cart , ProductListScreen , CategoryList , DetailsScreen} from '../screen/index'
import {createAppContainer }  from  'react-navigation' ; 
import {createStackNavigator}  from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs' ; 
import {View} from 'react-native'
import {Icon} from 'react-native-elements'
import Colors  from './Style/Colors'
const TabNavigatior  = createMaterialBottomTabNavigator(
    {
        Home :{
            screen : Home ,
            navigationOptions:{
                tabBarLabel : 'محصولات' , 
                barStyle:{backgrandColor : Colors.tabBarColors.HomeTabColor} , 
                tabBarIcon : (()=>{
                    <View>
                        <Icon   name ={'home'} size = {20} style = {{color : 'red'}}/>
                    </View>
                })
            } ,
            
        }  , 

        Profile :{
            screen : Profile ,
            navigationOptions:{
                tabBarLabel : 'پروفایل' ,  
                barStyle:{backgrandColor : Colors.tabBarColors.ProfileTabColor} , 
                
            }
        }  ,

        Search :{
            screen : Search ,
            navigationOptions:{
                tabBarLabel : 'جستجو' ,  
                barStyle:{backgrandColor : Colors.tabBarColors.SearchTabColor} , 
                
            }
        }  ,

        Cart :{
            screen : Cart ,
            navigationOptions:{
                tabBarLabel : 'سبد خرید' ,  
                barStyle:{backgrandColor : Colors.tabBarColors.CartTabColor} , 
               
            }
        }  ,

    } , {
        initialRouteName : 'Home' , 
        order : [ "Profile", "Cart","Search", "Home" ] , 
        shifting : true , 
        tabBarOptions:{
            activeTintColor :  ' blue' , 
            inactiveTintColor : 'gray' , 
            style : {
                backgrandColor : '#f1f1f1'
            } , 
            indicatorStyle:{
                backgrandColor : 'blue'
            } ,
            Icons : {
                showIcon : true 
            } 
            
        } , 
        Position:{
            tabBarPosition:'bottom'
        }
    }
)

const AppStackNavigator = createStackNavigator({
    ButtomNavigator:{
        screen : TabNavigatior , 
        navigationOptions:{
            title : 'فروشگاه آنلاین' ,
            
        }
    } , 
    ProductList:{
        screen : ProductListScreen  , 
    } , 
    CategoryList : {
        screen : CategoryList
    } , 
    Details : {
        screen : DetailsScreen , 
        navigationOptions : {
            title: 'ویژگی های محصول' 
        }
    }
})
export default  createAppContainer(AppStackNavigator);