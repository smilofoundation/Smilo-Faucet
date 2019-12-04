#!/usr/bin/env bash

SMILO_PRIVATE_KEY=KEY \
SMILO_NODE_URL=https://api.smilo.foundation \
PORT=3001 \
nohup node src/index.js 2>>faucet-mainnet.log &
