import { StyleSheet, Text, View } from "react-native";
import { mockResults } from "@/data/mock-results";
import { useAppState } from "@/state/app-state";
import PhoneShell from "@/components/phone-shell";
import ResultCard from "@/components/ui/result-card";
import { Colors, Typography } from "@/constants/colors";

export default function ResultsScreen() {
  const { state } = useAppState();

  const chips = [
    state.conditionTag ? state.conditionTag : null,
    state.complaint ? `"${state.complaint}"` : null,
    state.insuranceProvider ? `Sigorta: ${state.insuranceProvider}` : null,
  ].filter(Boolean);

  return (
    <PhoneShell title="Senin İçin En İyi Seçenekler">
      <Text style={styles.desc}>Sigorta uyumu, kalite ve maliyete göre sıralandı.</Text>

      {chips.length ? (
        <View style={styles.chips}>
          {chips.map((c) => (
            <View key={c} style={styles.chip}><Text style={styles.chipText}>{c}</Text></View>
          ))}
        </View>
      ) : null}

      <View style={{ marginTop: 14, gap: 10 }}>
        {mockResults.map((r, idx) => (
          <ResultCard key={idx} rank={idx + 1} {...r} />
        ))}
      </View>

      <Text style={styles.note}>
        * MVP: Maliyet/kapsam bilgileri pilot verilerle temsilidir.
      </Text>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  desc: { fontFamily: Typography.fontFamily.regular, color: Colors.text.normal, fontSize: 13 },
  chips: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 },
  chip: { backgroundColor: Colors.background.app, borderWidth: 1, borderColor: Colors.background.softBorder, paddingVertical: 6, paddingHorizontal: 10, borderRadius: 999 },
  chipText: { fontSize: 12, fontFamily: Typography.fontFamily.semibold, color: Colors.text.normal },
  note: { marginTop: 12, fontSize: 11, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
});
