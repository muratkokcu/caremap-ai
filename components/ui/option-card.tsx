import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Typography } from "@/constants/colors";

interface OptionCardProps {
  label: string;
  sub?: string;
  selected: boolean;
  onPress: () => void;
}

export default function OptionCard({ label, sub, selected, onPress }: OptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected ? styles.selected : styles.normal,
        pressed && { opacity: 0.95 },
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      {sub ? <Text style={styles.sub}>{sub}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 18, padding: 14, borderWidth: 1 },
  normal: { backgroundColor: Colors.background.card, borderColor: Colors.background.softBorder },
  selected: { backgroundColor: Colors.legacy.blue[50], borderColor: Colors.action.primary },
  label: { fontFamily: Typography.fontFamily.bold, color: Colors.text.primary },
  sub: { marginTop: 6, fontSize: 12, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
});
