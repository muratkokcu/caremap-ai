import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Typography } from "@/constants/colors";

type DotType = "green" | "yellow" | "red";

interface DotProps {
  type: DotType;
}

function Dot({ type }: DotProps) {
  const bg = type === "green" ? Colors.status.covered : type === "yellow" ? Colors.status.partial : Colors.status.notCovered;
  return <View style={[styles.dot, { backgroundColor: bg }]} />;
}

interface ResultCardProps {
  rank: number;
  hospital: string;
  doctor: string;
  bullets: string[];
  cost: number;
  statusDots?: DotType[];
}

export default function ResultCard({
  rank,
  hospital,
  doctor,
  bullets,
  cost,
  statusDots
}: ResultCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.leftRow}>
          <View style={styles.rank}>
            <Text style={styles.rankText}>{rank}</Text>
          </View>
          <View>
            <Text style={styles.hospital}>{hospital}</Text>
            <Text style={styles.doctor}>{doctor}</Text>
          </View>
        </View>
        <View style={styles.dots}>
          {statusDots?.map((d, i) => <Dot key={i} type={d} />)}
        </View>
      </View>

      <View style={{ marginTop: 10, gap: 6 }}>
        {bullets.map((b, i) => (
          <View key={i} style={styles.bulletRow}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.bulletText}>{b}</Text>
          </View>
        ))}
        <View style={styles.bulletRow}>
          <Text style={styles.money}>₺</Text>
          <Text style={styles.bulletText}>
            Tahmini Maliyet: <Text style={{ fontWeight: "800" }}>{cost} TL</Text>
          </Text>
        </View>
      </View>

      <Pressable style={styles.cta}>
        <Text style={styles.ctaText}>Detay & Randevu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 18, borderWidth: 1, borderColor: Colors.background.softBorder, backgroundColor: Colors.background.card, padding: 14 },
  topRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  leftRow: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  rank: { width: 34, height: 34, borderRadius: 12, backgroundColor: Colors.legacy.blue[50], alignItems: "center", justifyContent: "center" },
  rankText: { fontFamily: Typography.fontFamily.extrabold, color: Colors.legacy.blue[700] },
  hospital: { fontFamily: Typography.fontFamily.extrabold, color: Colors.text.primary },
  doctor: { marginTop: 2, fontSize: 12, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
  dots: { flexDirection: "row", gap: 6, marginTop: 6 },
  dot: { width: 10, height: 10, borderRadius: 999 },
  bulletRow: { flexDirection: "row", gap: 8, alignItems: "center" },
  check: { color: Colors.status.covered, fontFamily: Typography.fontFamily.extrabold },
  money: { color: Colors.action.primary, fontFamily: Typography.fontFamily.extrabold },
  bulletText: { color: Colors.text.normal, fontSize: 13, fontFamily: Typography.fontFamily.regular },
  cta: { marginTop: 12, borderRadius: 18, borderWidth: 1, borderColor: Colors.background.softBorder, paddingVertical: 10, alignItems: "center" },
  ctaText: { fontFamily: Typography.fontFamily.extrabold, fontSize: 13, color: Colors.text.primary },
});
