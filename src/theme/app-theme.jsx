import { ImageBackground, StyleSheet } from "react-native";

const colors = {
  white: "#ffffff",
  black: "#00000",
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    margin:5,
    backgroundColor:'white',
  },
  //Componentes para el HeaderComponente
  containerHeader: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 0,
  },
  divider: {
    color: "gray",
    padding: 5,
  },
  textTitle: {
    fontSize: 33,
    color: colors.black,
    marginLeft: 25,
  },
  textSubtitle: {
    fontSize: 23,
    color: colors.black,
    marginLeft: 25,
    marginTop: 10,
  },
  viewHeaderGeneral: {
    flexDirection: "column",
  },
  viewHeaderInsideGeneral: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
    paddingTop: 15,
  },

  //estilos para MemoriesComponente
  imageGeneralContainer: {
    height: 520,
    width: 428,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 35,
    borderWidth: 0,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  imageBackground: {
    flex: 1,
  },
  titleImage: {
    fontSize: 35,
    color: "white",
  },
  yearImage: {
    fontSize: 20,
    color: "white",
    paddingLeft: 7,
  },
  viewTituloGeneral: {
    height: 140,
    width: 140,
    flexDirection: "column",
    marginLeft: 25,

    //borderWidth:5,
  },
  viewLogosGeneral: {
    height: 50,
    width: 375,
    alignItems: "flex-end",
    // borderWidth:3,
    // borderColor:'red',
  },
  viewLogos: {
    flexDirection: "row",
    height: 45,
    width: 80,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    // borderWidth:3,
    // borderColor:'red',
  },
  viewIconMore: {
    height: 30,
    width: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
  },
  //Estilos para Featured Photos -------------------------------
  imagenConteinerFeatured: {
    height: 400,
    width: 400,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    //borderWidth:2,
  },
  //   viewTextFecha:{
  //     marginLeft:20,
  //     borderWidth:2
  //   },
  textDeDonde: {
    fontSize: 15,
    color: "black",
    marginLeft: 20,
  },
  textFecha: {
    fontSize: 15,
    color: "gray",
    marginLeft: 20,
    marginBottom: 0,
  },
  //Estilos para MemoriesForYouScreen
  textMemories: {
    fontSize: 20,
    color: "black",
  },
  viewHeader: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom:5,
    //borderWidth:2,
  },

  // Estilos Album
  viewPlus: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 0,
    marginLeft: 20,
  },
  imageAlbum: {
    width: 165,
    height: 165,
    margin: 20,
    marginRight:10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    //borderWidth:2,
  },
  viewDobleFila: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  // estilos AlbumsYearsComponent
  imageConteinerYearGeneral:{
    marginHorizontal:20,
    marginBottom: 0,
    borderWidth: 0,
  },
  imagenConteinerYear:{
    height:390,
    width:390,
    overflow:'hidden',
    borderRadius:15,
  },
  textYear:{
    fontSize:25,
    color:'white'
  },
  viewYear:{
    margin:20
  },

  //estilos AlbumsMothyearsComponent
  imagenConteinerMonthYear:{
    height:390,
    width:390,
    overflow:'hidden',
    borderRadius:15,
  },
  textMonth:{
    fontSize:"30",
    color:"black"
  },
  textMonthYear:{
    fontSize:"30",
    color:"gray"
  },
  textYearNextContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    margin: 10,
    marginTop:0,
    //borderWidth:2,
    paddingRight:110,
    paddingLeft:10,
  },
  //estilos para searchComponent
  searchBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 30,
    marginRight:40,
    marginTop:10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize:20,
  },
  //estilos PeopleComponent
  peopleContainer:{
    height:125,
    width:125,
    borderRadius:80,
    overflow:'hidden',
    margin:15,
    marginRight:0,
  },
  textSubtitleSearch: {
    fontSize: 25,
    color: colors.black,
    marginLeft: 25,
    marginTop: 40,
  },
  viewPeople:{
    flexDirection:'row'
  },

  viewPlaceCategoriesContainer:{
    height:150,
    width:150,
  },
  placeCategoriesContainerGeneral:{
    marginLeft:20,
    marginBottom: 0,
    marginTop:20,
    alignItems:'center',
    borderWidth: 0,
  },
  textPlaceCategorie:{
    fontSize:25,
    color:'black',
    marginBottom:10,
  },


});

export default styles;
