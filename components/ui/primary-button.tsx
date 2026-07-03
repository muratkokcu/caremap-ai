import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Typography } from "@/constants/colors";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

export default function PrimaryButton({
  title,
  onPress,
  disabled,
  variant = "primary"
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        variant === "primary" ? styles.primary : styles.secondary,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text style={[styles.text, variant === "primary" ? styles.textPrimary : styles.textSecondary]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: "100%",
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: Colors.action.primary },
  secondary: { backgroundColor: Colors.legacy.blue[50], borderWidth: 1, borderColor: Colors.legacy.blue[100] },
  disabled: { backgroundColor: Colors.action.disabled },
  pressed: { transform: [{ scale: 0.99 }] },
  text: { fontFamily: Typography.fontFamily.bold, fontSize: 15 },
  textPrimary: { color: "white" },
  textSecondary: { color: Colors.legacy.blue[700] },
});
