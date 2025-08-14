import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  ScrollView, 
  Platform 
} from 'react-native';
import SearchBar from '../components/inputs/SearchBar';
import CardButton from '../components/buttons/CardButton';
import Svg, { Path } from 'react-native-svg';

// Icono de reloj (llegadas tardías)
const WatchIcon = () => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M16 7h-1V4H9v3H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1v3h6v-3h1a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z" />
    <Path d="M12 9v4l2 2" />
  </Svg>
);

// Icono de avión (llegadas a tiempo)
const PaperPlaneIcon = () => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M22 2L11 13" />
    <Path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </Svg>
);

const AccessScreen = () => {
  return (
    <SafeAreaView 
      style={[
        styles.container, 
        Platform.OS === 'android' && { paddingTop: StatusBar.currentHeight }
      ]}
    >
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Historial de accesos</Text>

        <SearchBar placeholder="Busca llegadas por fecha" style={styles.searchBar} />

        <View style={styles.buttonsContainer}>
          <CardButton
            icon={<WatchIcon />}
            text="VER LLEGADAS TARDÍAS"
            onPress={() => alert('Llegadas Tardías')}
          />

          <CardButton
            icon={<PaperPlaneIcon />}
            text="VER LLEGADAS A TIEMPO"
            onPress={() => alert('Llegadas a Tiempo')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 15,
  },
  searchBar: {
    marginBottom: 20,
  },
  buttonsContainer: {
    gap: 15,
  },
});

export default AccessScreen;
