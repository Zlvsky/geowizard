module.exports = {
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'tsconfig.json'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'tailwindcss'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
}
