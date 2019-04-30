var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('F9BEB4D9'),
  addressVersion: 0x03,
  privKeyVersion: 0x00,
  P2SHVersion: 125,
  hkeyPublicVersion: 0x0488c42e,
  hkeyPrivateVersion: 0x0488e1f4,
  genesisBlock: {
    hash: hex('74952EA5CE08450348643F611D41696F8E0DD63CD0E587247F4B5C1E28484160'),
    merkle_root: hex('C787795041016D5EE652E55E3A6AEFF6C8019CF0C525887337E0B42065526916'),
    height: 0,
    nonce: 2084524493,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1492973331,
    bits: 504365040,
  },
  defaultClientPort: 9333
};

exports.mainnet = exports.livenet;

exports.testnet = {  //not setup for litecoin yet
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 265310,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1392281929,
    bits: 486604799,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
