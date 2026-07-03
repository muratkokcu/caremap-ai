import { StyleSheet, Text, View } from "react-native";
import PhoneShell from "@/components/phone-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { useRouter } from "expo-router";
import { Colors, Typography } from "@/constants/colors";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <PhoneShell>
      <View style={styles.center}>
        <Text style={styles.h1}>Hoş Geldiniz!</Text>
        <Text style={styles.p}>Doğru hastaya, doğru doktor,{"\n"}doğru maliyet.</Text>
      </View>

      <View style={{ gap: 12 }}>
        <PrimaryButton title="Sigorta Poliçeni Yükle" onPress={() => router.push("/insurance")} />
        <PrimaryButton title="Hastalığımı Belirt" variant="secondary" onPress={() => router.push("/condition")} />
      </View>

      <View style={{ marginTop: 16 }}>
        <PrimaryButton title="Devam Et" onPress={() => router.push("/insurance")} />
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  center: { paddingTop: 34, paddingBottom: 22, alignItems: "center" },
  h1: { fontSize: 24, fontFamily: Typography.fontFamily.extrabold, color: Colors.text.primary },
  p: { marginTop: 10, textAlign: "center", fontFamily: Typography.fontFamily.regular, color: Colors.text.normal },
});
