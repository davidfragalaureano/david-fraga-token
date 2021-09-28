# David Fragas's Token

This project is a token implementation running in [RSK blockchain](https://explorer.testnet.rsk.co/address/0xf101a76b17365194570b3d5c27513241efe32985).
It's a Smart Contract that let's you send and receive David Fraga's Tokens.


## Project structure

### app/

Contains the react web app for visualizing and connecting to metamask to be able to transfer funds

### contracts/

Holds the SM files in solidity 


### test/ 

Contains the unit tests for the SM token

### scripts/

Contains files for deployoin the Token/SM

### contract-example.json

Sample file for storing contract and deployer information (keys, addresses, etc)

### hardhat.config.ts

Hardhat configuration file

### utils.js

Utils for generating Public key and Addresses from a Raw private key.


## Glossary

SM = `Smart Contract`