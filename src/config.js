require('dotenv').config()

const env = (name, fallback = '') => process.env[name] || fallback

module.exports = {
  PORT: env('PORT', 3000),
  HOST: env('HOST', '127.0.0.1'),
  DEBUG_MESSAGES: JSON.parse(env('DEBUG_MESSAGES', 'false')),

  SMILO_NODE_URL: env('SMILO_NODE_URL', 'https://testnet-wallet.smilo.network/api'),
  SMILO_PRIVATE_KEY: env('SMILO_PRIVATE_KEY', 'PRIVATE'),
  SMILO_PAYOUT: env('SMILO_PAYOUT', '1'),

  ERC20_CONTRACT_ADDRESS: env('ERC20_CONTRACT_ADDRESS', ''),
  ERC20_PRIVATE_KEY: env('ERC20_PRIVATE_KEY', ''),
  ERC20_ABI: JSON.parse(env('ERC20_ABI', 'false')),
  ERC20_NAME: env('ERC20_NAME', ''),
  ERC20_PAYOUT: env('ERC20_PAYOUT', '0'),

  FAUCET_DRIPS_SMILO: JSON.parse(env('FAUCET_DRIPS_SMILO', 'true')),
  FAUCET_DRIPS_ERC20: JSON.parse(env('FAUCET_DRIPS_ERC20', 'false')),
}
