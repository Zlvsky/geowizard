module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'eslint-config-prettier', 'plugin:tailwindcss/recommended'],
  ignorePatterns: ['.eslintrc.cjs', "tsconfig.json"],
  parser: '@typescript-eslint/parser',
  settings: {
      tailwindcss: {
        config: path.join(__dirname, './apps/app/tailwind.config.js')
      }
    }
}
