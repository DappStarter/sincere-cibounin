require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note misery clump hunt problem olympic tag'; 
let testAccounts = [
"0xd89f21d8b01b316e50b8933050ee83fc6e723681cca906c01fbbb9775030384b",
"0xdb381d42fa40e7c0de1ec951ac246c4cc9af1ef4512141c6c9a64af4d2702c55",
"0x3f0f218451b9b02dbbd1b4ee1f0a70477600bca64d137739022d80b39de6933b",
"0x1d902890980f511d07aad7c58d0159b34a86f6e680f3919e4704f3d7fb738186",
"0xce65da110828bb582ebde0cd7cf3b027735482ca08b1f45dd118be96600d1887",
"0xd35bdec33e3a929d43a8a06927e7330927a61fcadf0cd122947946bdda8a9920",
"0x1b0db3478911972030cac5bc07b89d3848baa9d0c06d854b84397012ac65560f",
"0x2e607bae8d90fb74ccc31c249e805500328f2c92720df3157b2e2af6e6851740",
"0xb1e8f529383c1132e2b680bd9a2149222de66f579a7166394f290a4a8eea0db2",
"0xdf15300292c21a116a937bb5f17ee334100f0134a504604a5ff7b3921d62fde8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
