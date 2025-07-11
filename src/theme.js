import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
	theme: {
		tokens: {
			colors: {
				brand: {
					100: { value: "#FEFFFE" },
					200: { value: "#E0FF4F" },
					300: { value: "#FF6663" },
					400: { value: "#BFD7EA" },
					500: { value: "#0B3954" },
				},
			},
		},
		semanticTokens: {
			colors: {
				brand: {
					solid: { value: "{colors.brand.400}" }, // button backgrounds
					contrast: { value: "{colors.brand.100}" }, // button text
					fg: { value: "{colors.brand.500}" }, // Link & badge text
					muted: { value: "{colors.brand.100}" },
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