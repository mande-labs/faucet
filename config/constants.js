
const FAUCET_QUEUE_LIMIT = 15;
const AMOUNT = "1000000";
const MAX_PER_IP = 100;
const TX_COOLOFF_TIME = 60*60; // 1 hr
const TX_COOLOFF_COUNT = 2000;
const DENOM = "mand";
const CHAIN_ID = "mande-testnet-1";
let faucetQueue=[];
const prefix= "mande";
const gas_price = "0.0025mand";
const gas = "20000000";
const TIME_LIMIT = 24*3600; // 1 day
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
    HD_PATH,
    TX_COOLOFF_TIME,
    TX_COOLOFF_COUNT
}
