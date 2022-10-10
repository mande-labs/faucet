
const FAUCET_QUEUE_LIMIT = 15;
const AMOUNT = "100000000";
const DENOM = "mand";
const CHAIN_ID = "mande-testnet-1";
let faucetQueue=[];
const prefix= "mande";
const gas_price = "0.0025mand";
const gas = "20000000";
const TIME_LIMIT = 24*3600; // 1 day
const MAX_PER_IP = 1;
const HD_PATH = "m/44'/118'/0'/0/0";
module.exports = {
    FAUCET_QUEUE_LIMIT,
    AMOUNT,
    DENOM,
    CHAIN_ID,
    faucetQueue,
    prefix,
    gas_price,
    gas,
    TIME_LIMIT,
    MAX_PER_IP,
    HD_PATH
}
