import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Typography } from "@/constants/colors";

interface PhoneShellProps {
  title?: string;
  children: React.ReactNode;
}

export default function PhoneShell({ title, children }: PhoneShellProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.brandRow}>
            <Image
              source={require('@/assets/images/logos/CareMap-Icon.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.brand}>CareMap</Text>
          </View>
          {title ? <Text style={styles.title}>{title}</Text> : null}
        </View>

        <View style={styles.body}>{children}</View>

        <View style={styles.footer}>
          <Text style={styles.footerLink}>KVKK</Text>
          <Text style={styles.footerLink}>Gizlilik Politikası</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background.app,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: 390,
    maxWidth: "100%",
    backgroundColor: Colors.background.card,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.background.softBorder,
    overflow: "hidden",
    shadowColor: Colors.text.primary,
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 14 },
    elevation: 6,
  },
  header: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background.divider,
  },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  logo: {
    width: 34,
    height: 34,
  },
  brand: { fontFamily: Typography.fontFamily.bold, fontSize: 16, color: Colors.text.primary },
  title: { marginTop: 10, fontSize: 18, fontFamily: Typography.fontFamily.bold, color: Colors.text.primary },
  body: { padding: 18 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: Colors.background.divider,
  },
  footerLink: { fontSize: 12, fontFamily: Typography.fontFamily.regular, color: Colors.text.description },
});
