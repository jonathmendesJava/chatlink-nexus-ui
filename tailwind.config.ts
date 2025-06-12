import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'ample': ['Nunito', 'sans-serif'],
				'sans': ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				chatlink: {
					dark: '#0f1419',
					purple: {
						50: '#faf7ff',
						100: '#f0e7ff',
						200: '#e0d1ff',
						300: '#c9b3ff',
						400: '#a88fff',
						500: '#7e50f5',
						600: '#6b3ed9',
						700: '#5a2fb8',
						800: '#4a2696',
						900: '#3d1e78'
					},
					mint: {
						50: '#f0fffc',
						100: '#ccfff4',
						200: '#99ffea',
						300: '#5cffe0',
						400: '#1df692',
						500: '#00e675',
						600: '#00b85e',
						700: '#00924d',
						800: '#007340',
						900: '#005e36'
					},
					blue: {
						50: '#e6f3ff',
						100: '#b3d9ff',
						200: '#80bfff',
						300: '#4da6ff',
						400: '#1a8cff',
						500: '#0066cc',
						600: '#0052a3',
						700: '#003d7a',
						800: '#002952',
						900: '#001429'
					},
					green: {
						50: '#e6fff2',
						100: '#b3ffdb',
						200: '#80ffc4',
						300: '#4dffad',
						400: '#1aff96',
						500: '#00cc66',
						600: '#00a352',
						700: '#007a3d',
						800: '#005229',
						900: '#002914'
					},
					cyber: {
						primary: '#00d9ff',
						secondary: '#00ff88',
						accent: '#ff0080',
						purple: '#7e50f5',
						mint: '#1df692'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px theme(colors.chatlink.cyber.primary), 0 0 20px theme(colors.chatlink.cyber.primary), 0 0 35px theme(colors.chatlink.cyber.primary)'
					},
					'50%': {
						boxShadow: '0 0 10px theme(colors.chatlink.cyber.primary), 0 0 40px theme(colors.chatlink.cyber.primary), 0 0 60px theme(colors.chatlink.cyber.primary)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-cyber': 'linear-gradient(135deg, #001429 0%, #002952 25%, #0052a3 50%, #002914 75%, #005229 100%)',
				'gradient-hero': 'linear-gradient(135deg, #0f1419 0%, #001429 30%, #002914 70%, #0f1419 100%)',
				'gradient-card': 'linear-gradient(145deg, rgba(0, 20, 41, 0.8) 0%, rgba(0, 41, 82, 0.4) 50%, rgba(0, 82, 41, 0.6) 100%)',
				'gradient-purple': 'linear-gradient(135deg, #7e50f5 0%, #1df692 100%)',
				'gradient-harmonized': 'linear-gradient(135deg, #00d9ff 0%, #7e50f5 35%, #1df692 70%, #00ff88 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
