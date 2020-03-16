import React  from 'react' 
import allStyle  from  '../../config/Style/all.Style'
import {Icon , View , Text , Content} from 'native-base'
import Slider  from '../Component/SpecialSlider'
import Categorys from '../Component/Categorys'
import { ScrollView } from 'react-native'
class  HomeScreen  extends React.Component{
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name = "home"  style={{fontSize:20 , color : tintColor}} />
        )
    }

    constructor(props){
        super(props) ; 
        this.state={} ;
    }

    render(){
        return(
            <ScrollView>
                <Content style = {{backgroundColor : '#f1f2f6'}}>
                <Text style = {allStyle.mainTitel}>پیشنهاد ویژه</Text>
                <Slider />        
                <Text style = {allStyle.mainTitel}>دسته بندی محصولات</Text>
                <Categorys />
                <Text style = {allStyle.mainTitel}>پربازدیدترین ها</Text>
                
            </Content>
            </ScrollView>
        )
    }
}

export default  HomeScreen;