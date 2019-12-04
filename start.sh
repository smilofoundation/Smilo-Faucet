#!/usr/bin/env bash

SMILO_PRIVATE_KEY=KEY \
SMILO_NODE_URL=https://testnet-wallet.smilo.network/api \
PORT=3000 \
nohup node src/index.js 2>>faucet-testnet.log &
