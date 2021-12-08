import { StyleSheet } from 'react-native';
export const globalPadding =  20

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalViewRoot:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: globalPadding,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewContents: {
    alignItems:'center'
  },
  
});
