import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

// Datos de ejemplo para mostrar
const MOCK_SAGRAS = [
  {
    id: '1',
    name: 'Sagra della Pasta',
    location: 'Roma, Italia',
    date: '15-20 Maggio 2025',
    description: 'Festival tradicional de pasta italiana',
    mainDish: 'Pasta all\'Amatriciana'
  },
  {
    id: '2',
    name: 'Sagra del Tartufo',
    location: 'Alba, Italia',
    date: '1-5 Ottobre 2025',
    description: 'Celebración de la trufa blanca',
    mainDish: 'Tagliolini al Tartufo'
  },
  {
    id: '3',
    name: 'Sagra del Pistacchio',
    location: 'Bronte, Italia',
    date: '23-25 Settembre 2025',
    description: 'Festival del pistacchio de Bronte',
    mainDish: 'Pasta al Pesto di Pistacchio'
  }
];

// Componente para cada item de la lista
const SagraItem = ({ item }) => (
  <TouchableOpacity 
    style={styles.sagraItem}
    onPress={() => console.log('Sagra seleccionada:', item.name)}
  >
    <Text style={styles.sagraName}>{item.name}</Text>
    <Text style={styles.sagraLocation}>{item.location}</Text>
    <Text style={styles.sagraDate}>{item.date}</Text>
    <Text style={styles.sagraDescription}>{item.description}</Text>
    <Text style={styles.sagraDish}>Piatto principale: {item.mainDish}</Text>
  </TouchableOpacity>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FESTA IN PIAZZA</Text>
        <Text style={styles.subtitle}>Scopri le sagre vicino a te</Text>
      </View>
      
      <FlatList
        data={MOCK_SAGRAS}
        renderItem={({ item }) => <SagraItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFE4E1', // Rosa pastel
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  list: {
    padding: 16,
  },
  sagraItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sagraName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  sagraLocation: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  sagraDate: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 8,
  },
  sagraDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  sagraDish: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666666',
  },
});

export default HomeScreen;