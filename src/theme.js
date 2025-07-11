import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
	theme: {
		tokens: {
			colors: {
				brand: {
					100: { value: "#F2E9DC" },
					200: { value: "#CFD11A" },
					300: { value: "#91C499" },
					400: { value: "#808F85" },
					500: { value: "#595959" },
				},
			},
		},
		semanticTokens: {
			colors: {
				brand: {
					solid: { value: "{colors.brand.500}" }, // button backgrounds
					contrast: { value: "{colors.brand.200}" }, // button text
					fg: { value: "{colors.brand.400}" }, // Link & badge text
					muted: { value: "{colors.brand.300}" },
					subtle: { value: "{colors.brand.200}" }, // button hover background
					emphasized: { value: "{colors.brand.400}" },
					focusRing: { value: "{colors.brand.500}" },
				},
			},
		},
	},
	globalCss: {
		html: {
			colorPalette: "brand", // Change this to any color palette you prefer
		},
	},
})

export const system = createSystem(defaultConfig, customConfig)