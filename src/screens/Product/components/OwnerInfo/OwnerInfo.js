import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Touchable } from '../../../../components';
import s from './styles';

function OwnerInfo({
    owner,
}) {
    return (
        <View style={s.container}> 
            <Avatar 
                source={owner.avatar}
                name={owner.fullName}
                size={68}
            />
            <View style={s.ownerText}>
                <Text style={s.fullName}>
                    {owner.fullName}
                </Text>
                <Touchable useOpacityAndroid onPress={() => {}}>
                    <Text style={s.otherPosts}>
                        See other posts from {owner.fullName}
                    </Text>
                </Touchable>
            </View>
        </View>
    )
};

OwnerInfo.navigationOptions = {
    
    headerTransparent: s.header,
    
};

export default OwnerInfo;