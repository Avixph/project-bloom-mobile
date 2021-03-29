// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import styled from "styled-components";
// const Container = styled.View`
//   flex: 1;
//   padding: 50px 0;
//   justify-content: center;
//   background-color: #f4f4f4;
//   align-items: center;
// `;
// const Title = styled.Text`
//   font-size: 20px;
//   text-align: center;
//   color: red;
// `;
// const Item = styled.View`
//   flex: 1;
//   border: 1px solid #ccc;
//   margin: 2px 0;
//   border-radius: 10px;
//   box-shadow: 0 0 10px #ccc;
//   height: 200px;
//   background-color: ${(props) => (props.transparent ? "red" : "blue")}; 
//   width: 80%;
//   padding: 10px;
// `;
// const Shape = styled.View`
//   clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
// `;

// export default class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Item transparent>
//           {/*pass the props to the components*/}
//           <Title>Angel</Title>
//         </Item>
//         <Item primary>
//           <Title>David</Title>
//         </Item>
//         <Item transparent>
//           <Title>Quiana</Title>
//         </Item>
//         <Item primary>
//           <Title>Item number 1</Title>
//         </Item>
//       </Container>
//     );
//   }
// }
// export default styles;


// export default styles;

// import React from "react";
// // import { useState, useEffect } from "react";
// import { StyleSheet, SafeAreaView, Button, Text } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#d9bbf2",
//   },
// });

// export default function AboutScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>About</Text>
//     </SafeAreaView>
//   );
// }
