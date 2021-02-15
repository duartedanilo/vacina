import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileList from '../pages/ProfileList';
import Dependent from '../pages/Dependent';
import AddDependent from '../pages/AddDependent';
import MyVaccines from '../pages/MyVaccines';
import Campaigns from '../pages/Campaigns';
import CampaignDetail from '../pages/CampaignDetail';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#22292F',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function SignInStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="ProfileList"
        component={ProfileList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dependent"
        component={Dependent}
        options={{ headerTitle: 'Dependente' }}
      />
      <Stack.Screen
        name="MyVaccines"
        component={MyVaccines}
        options={{ headerTitle: 'Minhas vacinas' }}
      />
      <Stack.Screen
        name="AddDependent"
        component={AddDependent}
        options={{ headerTitle: 'Adicionar dependente' }}
      />
      <Stack.Screen
        name="Campaigns"
        component={Campaigns}
        options={{ headerTitle: 'Campanhas' }}
      />
      <Stack.Screen
        name="CampaignDetail"
        component={CampaignDetail}
        options={{ headerTitle: 'Detalhe da campanha' }}
      />
    </Stack.Navigator>
  );
}

export default SignInStack;
