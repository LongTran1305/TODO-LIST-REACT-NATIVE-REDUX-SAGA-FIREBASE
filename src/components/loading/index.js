import React from 'react';
import {ActivityIndicator} from "react-native";
import {useSelector} from 'react-redux';

import styles from './styles';

const LoadingHOC = ({children}) => {
    const isLoadingPopup = useSelector(state => state.loading.isLoadingPopup)

    return (
        <>
            {children}
            {isLoadingPopup === true ? (
                <ActivityIndicator size="large" style={styles.loading} color='white'/>
            ) : null}
        </>
    )
}

export default LoadingHOC;