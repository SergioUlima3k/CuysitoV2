import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importa useRouter para manejar la navegación
import React from 'react';

export default function BodyCuyo() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>SIMULACROS</Text>
      <View style={styles.container}>
        {/* Fila 1 */}
        <View style={styles.row}>
          <Pressable style={[styles.card, styles.cardone]} onPress={() => router.push('/(tabs)/simulacrosnew')}>
            <Text>Card 1</Text>
          </Pressable>
          <Pressable style={[styles.card, styles.cardtwo]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 2</Text>
          </Pressable>
        </View>

        {/* Fila 2 */}
        <View style={styles.row}>
          <Pressable style={[styles.card, styles.cardthree]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 3</Text>
          </Pressable>
          <Pressable style={[styles.card, styles.cardfour]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 4</Text>
          </Pressable>
        </View>
        
        <View style={styles.row}>
          <Pressable style={[styles.card, styles.cardfive]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 5</Text>
          </Pressable>
          <Pressable style={[styles.card, styles.cardsix]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 6</Text>
          </Pressable>
        </View>

        {/* Fila 3 (Card única centrada) */}
        <View style={styles.centerRow}>
          <Pressable style={[styles.card, styles.cardseven]} onPress={() => router.push('/(tabs)/perfil')}>
            <Text>Card 7</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: 'center', paddingTop: 20 },
  title: { fontSize: 20, fontFamily: 'poppinsB', color: 'white', textAlign: 'center', paddingBottom: 20 },
  container: { width: '100%', alignItems: 'center' },
  row: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 10 },
  centerRow: { alignItems: 'center', marginTop: 10 },
  card: {
    width: 150,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardone: { backgroundColor: '#ffcc00' },
  cardtwo: { backgroundColor: '#ff5733' },
  cardthree: { backgroundColor: '#33ff57' },
  cardfour: { backgroundColor: '#3357ff' },
  cardfive: { backgroundColor: '#ffcc00' },
  cardsix: { backgroundColor: '#ff5733' },
  cardseven: { backgroundColor: '#ff33a8', width: 200 },
});

