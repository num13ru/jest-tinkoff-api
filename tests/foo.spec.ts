import { mocked } from 'ts-jest/utils';
import { foo } from './foo';
jest.mock('./foo');

const mockedFoo = mocked(foo, true);

test('deep', () => {
    mockedFoo.a.b.c.hello('me');
    expect(mockedFoo.a.b.c.hello.mock.calls).toHaveLength(1);
});

test('direct', () => {
    foo.name();
    expect(mocked(foo.name).mock.calls).toHaveLength(1);
})