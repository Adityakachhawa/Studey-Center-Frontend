// import React from 'react';

// import {
//   NavigationContainer,
// } from '@react-navigation/native';

// import {AuthProvider} from './src/context/AuthContext';

// import RootNavigator from './src/navigation/RootNavigator';

// const App = () => {
//   return (
//     <AuthProvider>
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     </AuthProvider>
//   );
// };

// export default App;

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './src/navigation/RootNavigator';
import {AuthProvider} from './src/context/AuthContext';
import {COLORS} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      /> */}

      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;