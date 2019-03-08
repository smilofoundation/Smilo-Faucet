#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

docker build --no-cache -t smilo/testnet-faucet:frontend -f ./frontend.Dockerfile .
docker tag smilo/testnet-faucet:frontend 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/testnet-faucet:frontend
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/testnet-faucet:frontend

docker build --no-cache -t smilo/testnet-faucet:backend -f ./backend.Dockerfile .
docker tag smilo/testnet-faucet:backend 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/testnet-faucet:backend
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/testnet-faucet:backend