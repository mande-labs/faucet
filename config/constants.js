
const FAUCET_QUEUE_LIMIT = 15;
const AMOUNT = "100";
const DENOM = "mand";
const CHAIN_ID = "mandechain";
let faucetQueue=[];
const prefix= "cosmos";
const gas_price = "0.025mand";
const gas = "20000000";
const TIME_LIMIT = 3600; // 3600 seconds = 1 hours
const MAX_PER_IP = 100;
const MAX_VOTE_PER_IP = 20;
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
    MAX_VOTE_PER_IP,
    HD_PATH
}
