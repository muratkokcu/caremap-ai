# CareMap Design System

## Typography - Inter Font Family

The app now uses **Inter** as the primary font family across all components.

### Font Weights

```typescript
import { Typography } from "@/constants/colors";

Typography.fontFamily.regular      // Inter 400 - Body text
Typography.fontFamily.semibold     // Inter 600 - Input text, chips
Typography.fontFamily.bold         // Inter 700 - Headings, labels
Typography.fontFamily.extrabold    // Inter 800 - Hero text, emphasis
```

### Usage Examples

```typescript
// Headings
{ fontFamily: Typography.fontFamily.extrabold, fontSize: 24 }

// Body text
{ fontFamily: Typography.fontFamily.regular, fontSize: 13 }

// Buttons
{ fontFamily: Typography.fontFamily.bold, fontSize: 15 }

// Input fields
{ fontFamily: Typography.fontFamily.semibold }
```

## Logo Assets

All logos have been organized in `/assets/images/logos/`:

### CareMap Branding
- **CareMap-Icon.png** - App icon (used in PhoneShell header)
- **CareMap-Logo.png** - Full logo with text

### Insurance Partner Logos
- **allianz-logo.svg** - Allianz
- **Anadolu_Sigorta_logo.svg** - Anadolu Sigorta
- **ak-sigorta-seeklogo.png** - Aksigorta
- **quick-sigorta-seeklogo.png** - Quick Sigorta

### Logo Usage

```typescript
import { Image } from "react-native";

// CareMap Icon in header
<Image
  source={require('@/assets/images/logos/CareMap-Icon.png')}
  style={{ width: 34, height: 34 }}
  resizeMode="contain"
/>
```

## Color System

### Brand Colors (Premium)
```typescript
Colors.brand.trustBlue   // #0A3B8F - Insurance, trust
Colors.brand.careBlue    // #1E90FF - Digital health
Colors.brand.careGreen   // #2EF2C2 - Healing, health
```

### UI Colors (Clean Medical)
```typescript
Colors.background.app        // #F5F8FC - App background
Colors.background.card       // #FFFFFF - Cards
Colors.background.softBorder // #E6EDF5 - Borders
Colors.background.divider    // #DDE6F0 - Dividers
```

### Action Colors
```typescript
Colors.action.primary   // #1E90FF - Primary buttons
Colors.action.hover     // #177AE6 - Pressed state
Colors.action.disabled  // #BFDFFF - Disabled state
```

### Health Status
```typescript
Colors.status.covered     // #1ED760 - Insurance covers
Colors.status.partial     // #FFB020 - Partial coverage
Colors.status.notCovered  // #FF4D4F - Not covered
```

### Text Hierarchy
```typescript
Colors.text.primary      // #0B1F3A - Headings
Colors.text.normal       // #334B66 - Body text
Colors.text.description  // #6B85A6 - Secondary text
Colors.text.placeholder  // #9BB1C9 - Placeholders
```

## Component Typography

### PhoneShell
- **Brand name**: Inter 700 Bold
- **Title**: Inter 700 Bold, 18px
- **Footer links**: Inter 400 Regular, 12px

### PrimaryButton
- **Button text**: Inter 700 Bold, 15px

### OptionCard
- **Label**: Inter 700 Bold
- **Sub text**: Inter 400 Regular, 12px

### ResultCard
- **Hospital name**: Inter 800 ExtraBold
- **Doctor name**: Inter 400 Regular, 12px
- **Rank number**: Inter 800 ExtraBold
- **Bullet text**: Inter 400 Regular, 13px
- **CTA button**: Inter 800 ExtraBold, 13px

### Screens
- **Hero heading (H1)**: Inter 800 ExtraBold, 24px
- **Body text**: Inter 400 Regular
- **Description**: Inter 400 Regular, 13px
- **Input text**: Inter 600 SemiBold
- **Chips**: Inter 600 SemiBold, 12px

## Font Loading

The Inter font family is loaded in `app/_layout.tsx`:

```typescript
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';

const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
});
```

The splash screen is shown until fonts are loaded, ensuring no FOUT (Flash of Unstyled Text).

## Design Principles

1. **Consistency**: All text uses Inter font family
2. **Hierarchy**: Clear weight differentiation (400 → 600 → 700 → 800)
3. **Readability**: Regular weight for body text
4. **Emphasis**: ExtraBold for important information
5. **Professional**: Medical-grade typography standards

## Why Inter?

- **Modern & Professional**: Clean, neutral design perfect for healthcare
- **Excellent Readability**: Optimized for screens at all sizes
- **Complete Character Set**: Supports Turkish characters (ı, ş, ğ, etc.)
- **Variable Weights**: 400-800 range for perfect hierarchy
- **Free & Open Source**: No licensing concerns
- **Web Standard**: Used by major tech companies (GitHub, Figma, etc.)

## Implementation Checklist

✅ Inter font family installed via `@expo-google-fonts/inter`
✅ Font loading in root layout with splash screen
✅ Typography constants exported from `constants/colors.ts`
✅ CareMap logo integrated in PhoneShell header
✅ All components updated to use Inter fonts
✅ All screens updated with proper font weights
✅ Logo assets organized in `/assets/images/logos/`
✅ TypeScript compilation verified
✅ No FOUT - splash screen waits for fonts

## Next Steps

Your app now has:
- **Professional Typography** - Inter font family throughout
- **Brand Identity** - CareMap logo in header
- **Design Consistency** - Unified visual language
- **Insurance Partner Assets** - Ready for logo integration

Ready to run:
```bash
npx expo start
```
