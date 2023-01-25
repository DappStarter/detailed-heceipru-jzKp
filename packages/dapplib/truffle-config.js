require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember arrow gloom clip foster topple'; 
let testAccounts = [
"0x5d82f5a8c1009c149ebcab1dffa8e6f5e742e09a0a6761db7c198fab090df783",
"0xbdb742a7060b0bc29f8fee5312ba5071f21a4f51b04fd54a5598a3787d4f724b",
"0xe825ea7777a340a344efa7ef8835a0b124ed43af2ce4798b796cbedbe0509329",
"0x722e6f5783299ea39656317f9e068ae6ddde944ce7c98e886cb0627c583148ba",
"0x70814d1b0ae2cff393e4044360c861f4729acc32a94688cff75160e01d8e43e6",
"0x6fa4702ed29c8a715add2259844aee7418894125b087b3769d4a769684cdd57a",
"0xea9a72f57ba58e3134429e572549e552ca67b5518986f90ee89a784a20025ed3",
"0x6fd7d0217d8e8a50e86946002df882ef474abfd1c78192aa4c169db522b3fad6",
"0xf3df1fa88de6d5a34e0c09ab056bb3b45dead4d90330bfc6369d484e0aa685e4",
"0x4ca5b369c02a5ea94c868004d565a1fcf09ba300305eed23738048b255d38910"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

