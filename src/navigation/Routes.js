import React, { Component } from 'react';
import { Router, Scene, Actions, Tabs } from 'react-native-router-flux'
import SplashScreen from '../Containers/SplashScreen/index'
import Walkthrough from '../Containers/Authentication/index'
import Signin from '../Containers/Authentication/signin'
import Forgotyourpassword from '../Containers/Authentication/forgotyourpassword'
import Signup from '../Containers/Authentication/signup'
import Phoneverification from '../Containers/Authentication/phoneveryfication'
import Veryfiyournumber from '../Containers/Authentication/verifyyournumber'
import Allowaccesslocation from '../Containers/Authentication/allowaccesslocation'
import AppContainer from '../Containers/App/appcontainer'
import Filters from '../Containers/App/nearby/filters'
import Shop from '../Components/shop/index'
import Bookappointment from '../Components/shop/bookappointment'
import SearchResults from '../Containers/App/nearby/searchResult'
import ServiceDetaild from '../Components/shop/serviceDetails'
import OfferDetails from '../Components/shop/offerDetails'
import BarberDetails from '../Components/shop/barberDetails'
import ChooseService from '../Components/shop/chooseService'

class Route extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#f27500" }}
        titleStyle={{ color: "white" }}
        tintColor="white">
        <Scene >
          <Scene key='SplashScreen' component={SplashScreen} hideNavBar={true} initial />
          <Scene key='Walkthrough' component={Walkthrough} hideNavBar={true} />
          <Scene key='Signin' component={Signin} hideNavBar={true} />
          <Scene key='Forgotyourpassword' component={Forgotyourpassword} hideNavBar={true} />
          <Scene key='Signup' component={Signup} hideNavBar={true} />
          <Scene key='Phoneverification' component={Phoneverification} hideNavBar={true} />
          <Scene key='Veryfiyournumber' component={Veryfiyournumber} hideNavBar={true} />
          <Scene key='Allowaccesslocation' component={Allowaccesslocation} hideNavBar={true} />
          <Scene key='AppContainer' component={AppContainer} hideNavBar={true} />
          <Scene key='Shop' component={Shop} hideNavBar={true} />
          <Scene key='Filters' component={Filters} hideNavBar={true} />
          <Scene key='SearchResults' component={SearchResults} hideNavBar={true} />
          <Scene key='ServiceDetaild' component={ServiceDetaild} hideNavBar={true} />
          <Scene key='OfferDetails' component={OfferDetails} hideNavBar={true} />
          <Scene key='BarberDetails' component={BarberDetails} hideNavBar={true} />
          <Scene key='ChooseService' component={ChooseService} hideNavBar={true} />
          <Scene key='Bookappointment' component={Bookappointment} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

export default Route;