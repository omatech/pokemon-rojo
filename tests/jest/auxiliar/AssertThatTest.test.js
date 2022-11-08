class X {}
test('test', () => {
  expect(6).toEqual(6)
  expect(6).not.toEqual(5)

  expect(6).toBeGreaterThan(5)
  expect(6).not.toBeGreaterThan(6)

  expect(6).toBeGreaterThanOrEqual(5)
  expect(6).not.toBeGreaterThanOrEqual(7)

  expect(6).toBeLessThan(7)
  expect(6).not.toBeLessThan(5)

  expect(6).toBeLessThanOrEqual(9)
  expect(6).not.toBeLessThanOrEqual(3)

  expect(6.5).toBeCloseTo(6.4, 0)
  expect(6.5).not.toBeCloseTo(6.4, 3)

  expect(null).toBeNull()
  expect(new X()).not.toBeNull()

  const a = new X()
  const b = a

  expect(a).toEqual(b)
  expect(a).toBeInstanceOf(X)

  expect('hola').toEqualCaseInsensitive('HolA')
  expect('hola').not.toEqualCaseInsensitive('HolA ')

  expect('hola Paula!').toEqualIgnoringWhitespace('hola  Paula!')
  expect('ho,bro!').not.toEqualIgnoringWhitespace('hi, bro!')

  expect(5).toSatisfy(n => n > 0 && n < 10)
  expect(500).toSatisfy(n => n > 0 || n < 10)
})

