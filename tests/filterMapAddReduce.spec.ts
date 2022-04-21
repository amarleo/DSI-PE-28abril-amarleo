import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../src/filterMapAddReduce';

const array: FilterMapAddReduce = new FilterMapAddReduce([1, 0, 5, 10]);

describe('FilterMapAddReduce Class Tests', () => {
  it('Reduce Method', () => {
    expect(array.reduce()).to.be.eql(16);
  });
  it('Map Method', () => {
    expect(array.map((x: number) => {
      return x * x;
    })).to.be.eql([1, 0, 25, 100]);
  });
  it('Filter Method', () => {
    expect(array.filter((x: number) => {
      return (x > 10);
    })).to.be.eql([]);
    expect(array.filter((x: number) => {
      return (x < 10);
    })).to.be.eql([1, 0, 5]);
    expect(array.filter((x: number) => {
      return (x === 10);
    })).to.be.eql([10]);
  });
});
