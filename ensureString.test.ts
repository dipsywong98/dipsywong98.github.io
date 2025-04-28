const ensureStringValue = (config: { [key: string]: unknown }) =>
  Object.fromEntries(
    Object.entries(config).map(([key, value]) => {
      switch (typeof value) {
        case 'number':
          return [key, value.toString()];
        case 'boolean':
          return [key, value.toString()];
        default:
          return [key, value];
      }
    }),
  );

describe('ensureStringValue', () => {
  it('t', () => {
    expect(ensureStringValue({
      nil: null,
      undefined: undefined,
      num: 123,
      bool: true,
      string: 'hello world'
    })).toEqual({
      nil: null,
      undefined: undefined,
      num: '123',
      bool: 'true',
      string: 'hello world'
    })
  })
})
