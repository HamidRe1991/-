import React  from 'react' 
import allStyle  from  '../config/Style/all.Style'
import {Icon , View , Text} from 'native-base'
class  ProfileScreen  extends React.Component{
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name = "ios-person"  style={{fontSize:20 , color : tintColor}} />
        )
    }

    
    constructor(props){
        super(props) ; 
        this.state={} ;
    }

    render(){
        return(
            <View style = {allStyle.centerCuntainer}>
                <Text>profile Screen</Text>
            </View>
        )
    }
}

export default  ProfileScreen;