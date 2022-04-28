import 'mocha';
import {expect} from 'chai';
import {Add} from '../src/add';

let sum = new Add('./inputs/testSum.txt');

describe('Add class Tests', () => {
  it('Add class getters', () => {
    expect(sum.fileName).to.be.eql('./inputs/testSum.txt');
    expect(sum.data).to.be.eql('1 15 2');
    expect(sum.result).to.be.eql(18);
  });
  it('Add class setters', () => {
    sum.fileName = './inputs/testSum2.txt';
    sum.addData();
    expect(sum.fileName).to.be.eql('./inputs/testSum2.txt');
    // expect(sum.data).to.be.eql('1 2');
  });
});
