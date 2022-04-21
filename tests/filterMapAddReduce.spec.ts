import 'mocha';
import {expect} from 'chai';
import {FilterMapAddReduce} from '../src/filterMapAddReduce';

const array: FilterMapAddReduce = new FilterMapAddReduce([1, 0, 5, 10]);

describe('FilterMapAddReduce Class Tests', () => {
  it('Reduce Method', () => {
    expect(array.reduce()).to.be.eql(16);
  });
});
