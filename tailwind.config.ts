import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#121A22', charcoal:'#1E2A35', gold:'#D6A928', paper:'#F7F5EF', mist:'#E9EDF1' }, boxShadow: { executive:'0 24px 80px rgba(18,26,34,.12)' } } }, plugins: [] };
export default config;
