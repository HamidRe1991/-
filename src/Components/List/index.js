import React, { Component } from 'react';
import { FlatList } from 'react-native';
import ListItemComponent from '../../screen/ProductListScreen/Components/listItem'
class listComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { data } = this.props;
        return (
            <FlatList
            style = {{backgroundColor : '#fff'}}
                data={data}
                keyExtractor = {item=>item.id.toString()}
                renderItem={({ item }) => {
                    return(
                        <ListItemComponent itemData={item} />
                    )
                }}
            />
        );
    }
}

export default listComponent;