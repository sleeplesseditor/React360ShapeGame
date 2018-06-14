import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-vr';

import Shape from './vr/components/Shape';

class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      gameShapes: [1, 1, 1, 1]
    }
  }

  render() {
    return (
      <View>
          <Text style={styles.text}>Find the Odd Shape</Text>
          <Shape shapeNum={0} transform={[{translate: [0, 0, -5]}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);