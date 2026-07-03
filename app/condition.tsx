import { StyleSheet, Text, TextInput, View } from "react-native";
import { useAppState } from "@/state/app-state";
import OptionCard from "@/components/ui/option-card";
import PhoneShell from "@/components/phone-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { useRouter } from "expo-router";
import { Colors, Typography } from "@/constants/colors";

const TAGS = [
  { label: "Bel Fıtığı", sub: "Ortopedi / Beyin Cerrahisi" },
  { label: "Diz Ağrısı", sub: "Ortopedi" },
  { label: "Check-Up", sub: "Dahiliye" },
  { label: "Migren", sub: "Nöroloji" },
  { label: "Diyabet", sub: "Endokrinoloji" },
  { label: "Kalp Sorunları", sub: "Kardiyoloji" },
];

export default function ConditionScreen() {
  const { state, dispatch } = useAppState();
  const router = useRouter();
  const canGo = Boolean(state.complaint?.trim() || state.conditionTag);

  return (
    <PhoneShell title="Hastalığını Belirt">
      <Text style={styles.desc}>Şikayetini belirt, sana en uygun çözümleri bulalım.</Text>

      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>🔎</Text>
        <TextInput
          value={state.complaint}
          onChangeText={(t) => dispatch({ type: "SET_COMPLAINT", payload: t })}
          placeholder="Şikayetinizi yazın (ör. Bel ağrısı)"
          placeholderTextColor={Colors.text.placeholder}
          style={styles.input}
        />
      </View>

      <View style={styles.grid}>
        {TAGS.map((t) => (
          <View key={t.label} style={{ width: "48%" }}>
            <OptionCard
              label={t.label}
              sub={t.sub}
              selected={state.conditionTag === t.label}
              onPress={() => dispatch({ type: "SET_CONDITION_TAG", payload: t.label })}
            />
          </View>
        ))}
      </View>

      <View style={{ marginTop: 16 }}>
        <PrimaryButton title="İlerle" disabled={!canGo} onPress={() => router.push("/results")} />
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  desc: { fontFamily: Typography.fontFamily.regular, color: Colors.text.normal, fontSize: 13 },
  searchWrap: {
    marginTop: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.background.softBorder,
    backgroundColor: Colors.background.card,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  searchIcon: { color: Colors.text.placeholder },
  input: { flex: 1, color: Colors.text.primary, fontFamily: Typography.fontFamily.semibold },
  grid: { marginTop: 14, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 10 },
});
