import {MD5} from './../src/hash/MD5';
import {SHA1} from './../src/hash/SHA1';
import {SHA256} from './../src/hash/SHA256';
var assert = require('assert');

describe('Hashers', () => {
    describe('MD5', () => {
        describe('#hash', () => {
            it('should return correct hashes', () => {
                assert.equal('d41d8cd98f00b204e9800998ecf8427e', MD5.hash(''));
                assert.equal('0cc175b9c0f1b6a831c399e269772661', MD5.hash('a'));
                assert.equal('900150983cd24fb0d6963f7d28e17f72', MD5.hash('abc'));
                assert.equal('f96b697d7cb7938d525a2f31aaf161d0', MD5.hash('message digest'));
                assert.equal('c3fcd3d76192e4007dfb496cca67e13b', MD5.hash('abcdefghijklmnopqrstuvwxyz'));
                assert.equal('d174ab98d277d9f5a5611c2c9f419d9f', MD5.hash('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
                assert.equal('57edf4a22be3c955ac49da2e2107b67a', MD5.hash('12345678901234567890123456789012345678901234567890123456789012345678901234567890'));
            });
            it('should return a hash with length 32 characters', () => {
                let hash = MD5.hash('cryptographic hash function');
                assert.equal(hash.length, 32);
            });
        });
    });
    describe('SHA1', () => {
        describe('#hash', () => {
            it('should return correct hashes', () => {
                assert.equal('da39a3ee5e6b4b0d3255bfef95601890afd80709', SHA1.hash(''));
                assert.equal('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', SHA1.hash('a'));
                assert.equal('a9993e364706816aba3e25717850c26c9cd0d89d', SHA1.hash('abc'));
                assert.equal('c12252ceda8be8994d5fa0290a47231c1d16aae3', SHA1.hash('message digest'));
                assert.equal('32d10c7b8cf96570ca04ce37f2a19d84240d3a89', SHA1.hash('abcdefghijklmnopqrstuvwxyz'));
                assert.equal('761c457bf73b14d27e9e9265c46f4b4dda11f940', SHA1.hash('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
                assert.equal('50abf5706a150990a08b2c5ea40fa0e585554732', SHA1.hash('12345678901234567890123456789012345678901234567890123456789012345678901234567890'));
            });
            it('should return a hash with length 40 characters', () => {
                let hash = SHA1.hash('cryptographic hash function');
                assert.equal(hash.length, 40);
            });
        });
    });
    describe('SHA256', () => {
        describe('#hash', () => {
            it('should return correct hashes', () => {
                assert.equal('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', SHA256.hash(''));
                assert.equal('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', SHA256.hash('a'));
                assert.equal('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad', SHA256.hash('abc'));
                assert.equal('f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650', SHA256.hash('message digest'));
                assert.equal('71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73', SHA256.hash('abcdefghijklmnopqrstuvwxyz'));
                assert.equal('db4bfcbd4da0cd85a60c3c37d3fbd8805c77f15fc6b1fdfe614ee0a7c8fdb4c0', SHA256.hash('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
                assert.equal('f371bc4a311f2b009eef952dd83ca80e2b60026c8e935592d0f9c308453c813e', SHA256.hash('12345678901234567890123456789012345678901234567890123456789012345678901234567890'));
            });
            it('should return a hash with length 64 characters', () => {
                let hash = SHA256.hash('cryptographic hash function');
                assert.equal(hash.length, 64);
            });
        });
    });
});