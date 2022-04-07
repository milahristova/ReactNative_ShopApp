import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => {
        state.products.slice(state.products.availableProducts);
    });

    return (
        <FlatList>
            <Text>Test</Text>
        </FlatList>
    );
};

export default ProductsOverviewScreen;