import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppState } from "@/state/app-state";
import OptionCard from "@/components/ui/option-card";
import PhoneShell from "@/components/phone-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { useRouter } from "expo-router";
import { Colors, Typography } from "@/constants/colors";

const INSURERS = ["Allianz", "Acıbadem Sigorta", "Anadolu Sigorta", "Aksigorta"];

export default function InsuranceScreen() {
  const { state, dispatch } = useAppState();
  const router = useRouter();

  return (
    <PhoneShell title="Sigorta Poliçeni Yükle">
      <Text style={styles.desc}>Poliçe belgenizi yükleyin, kapsamınızı analiz edelim.</Text>

      <Pressable
        onPress={() => dispatch({ type: "SET_POLICY_FILE", payload: "police.pdf" })}
        style={styles.drop}
      >
        <Text style={styles.dropTitle}>Poliçe PDF'nizi Buraya Yükleyin</Text>
        <Text style={styles.dropSub}>
          {state.policyFileName ? `Seçilen dosya: ${state.policyFileName}` : "PDF / JPG / PNG"}
        </Text>
      </Pressable>

      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.or}>Veya</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.section}>Sigortanı Seç:</Text>
      <View style={styles.grid}>
        {INSURERS.map((x) => (
          <View key={x} style={{ width: "48%" }}>
            <OptionCard
              label={x}
              selected={state.insuranceProvider === x}
              onPress={() => dispatch({ type: "SET_INSURANCE_PROVIDER", payload: x })}
            />
          </View>
        ))}
      </View>

      <View style={{ marginTop: 16 }}>
        <PrimaryButton title="Devam Et" onPress={() => router.push("/condition")} />
      </View>
    </PhoneShell>
  );
}

const styles = StyleSheet.create({
  desc: { fontFamily: Typography.fontFamily.regular, color: Colors.text.normal, fontSize: 13 },
  drop: {
    marginTop: 14,
    borderRadius: 18,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: Colors.background.softBorder,
    padding: 16,
    alignItems: "center",
    backgroundColor: Colors.background.card,
  },
  dropTitle: { fontFamily: Typography.fontFamily.extrabold, color: Colors.text.primary },
  dropSub: { marginTop: 8, fontSize: 12, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
  dividerRow: { flexDirection: "row", alignItems: "center", gap: 10, marginVertical: 14 },
  line: { flex: 1, height: 1, backgroundColor: Colors.background.divider },
  or: { fontSize: 12, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
  section: { fontFamily: Typography.fontFamily.extrabold, marginBottom: 10, color: Colors.text.primary },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 10 },
});
