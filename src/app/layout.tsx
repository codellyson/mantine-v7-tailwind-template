// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
// import "@mantine/core/styles.layer.css"
import "./globals.css"
// import "@mantine/code-highlight/styles.layer.css"

import { MantineProvider, ColorSchemeScript } from "@mantine/core"

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	)
}