/**
 * CareMap Color Palette (Official System)
 *
 * This color system combines:
 * - Trust Blue → Insurance, trust, clinical seriousness
 * - Digital Cyan → AI, technology, digital health
 * - Care Green → Healing, health, positive outcomes
 */

export const Colors = {
  // 1) PRIMARY BRAND GRADIENT (Logo & Hero)
  brand: {
    trustBlue: '#0A3B8F',
    careBlue: '#1E90FF',
    careGreen: '#2EF2C2',
    gradient: 'linear-gradient(135deg, #0A3B8F, #1E90FF, #2EF2C2)',
  },

  // 2) APP UI COLORS (Clean Medical)
  background: {
    app: '#F5F8FC',
    card: '#FFFFFF',
    softBorder: '#E6EDF5',
    divider: '#DDE6F0',
  },

  // 3) PRIMARY ACTION (Buttons)
  action: {
    primary: '#1E90FF',
    hover: '#177AE6',
    disabled: '#BFDFFF',
  },

  // 4) HEALTH & INSURANCE STATUS
  status: {
    covered: '#1ED760',      // Sigorta kapsıyor
    partial: '#FFB020',      // Kısmi kapsıyor
    notCovered: '#FF4D4F',   // Kapsam dışı
  },

  // 5) TEXT COLORS
  text: {
    primary: '#0B1F3A',      // Ana başlık
    normal: '#334B66',       // Normal metin
    description: '#6B85A6',  // Açıklama
    placeholder: '#9BB1C9',  // Placeholder
  },

  // LEGACY MAPPINGS (for backward compatibility)
  legacy: {
    slate: {
      50: '#F5F8FC',
      100: '#F1F5F9',
      200: '#E6EDF5',
      300: '#DDE6F0',
      400: '#9BB1C9',
      500: '#6B85A6',
      600: '#334B66',
      700: '#0B1F3A',
      800: '#0F172A',
      900: '#0A3B8F',
    },
    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDFFF',
      500: '#1E90FF',
      600: '#177AE6',
      700: '#1D4ED8',
      800: '#0A3B8F',
    },
    green: {
      400: '#34D399',
      500: '#1ED760',
    },
    yellow: {
      400: '#FBBF24',
      500: '#FFB020',
    },
    red: {
      400: '#FB7185',
      500: '#FF4D4F',
    },
  },
};

// Typography - Inter Font Family
export const Typography = {
  fontFamily: {
    regular: 'Inter_400Regular',
    semibold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
    extrabold: 'Inter_800ExtraBold',
  },
};

/**
 * Usage Guide:
 *
 * Fonts:
 *   - Regular text: Typography.fontFamily.regular
 *   - Semibold: Typography.fontFamily.semibold
 *   - Bold headings: Typography.fontFamily.bold
 *   - Extra bold: Typography.fontFamily.extrabold
 *
 * Backgrounds:
 *   - App screen: Colors.background.app
 *   - Cards: Colors.background.card
 *   - Borders: Colors.background.softBorder
 *
 * Text:
 *   - Headers: Colors.text.primary
 *   - Body: Colors.text.normal
 *   - Hints: Colors.text.description
 *
 * Actions:
 *   - Primary button: Colors.action.primary
 *   - Disabled: Colors.action.disabled
 *
 * Status:
 *   - Good/Covered: Colors.status.covered
 *   - Warning/Partial: Colors.status.partial
 *   - Error/Not Covered: Colors.status.notCovered
 */
