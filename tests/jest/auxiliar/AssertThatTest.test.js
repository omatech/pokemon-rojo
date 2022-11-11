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

test('assertEquals', () => {
  const expectedInt = 0
  const resultInt = 0

  expect(expectedInt).toEqual(resultInt)
  expect(expectedInt).not.toEqual(1)

  const expectedFloat = 0.0
  const resultFloat = 0.1

  expect(expectedFloat).toBeCloseTo(resultFloat, 0.1)

  const expectedChar = "0"
  const resultChar = "0"

  expect(expectedChar).toEqual(resultChar)

  const expectedBoolean = true
  const resultBoolean = true

  expect(expectedBoolean).toEqual(resultBoolean)

  const expectedX = new X(null)
  const resutlX = expectedX

  expect(expectedX).toEqual(resutlX)
})

test('assertTrue', () => {
  const resultBoolean = true
  expect(resultBoolean).toBeTrue()
})
//
//    public function testAssertTrue(): void
//    {
//        $resultBoolean = (bool)true;
//        $this->assertTrue($resultBoolean, "should be true");
//        $this->assertTrue($resultBoolean);
//        // with assertThat
//        assertThat($resultBoolean, equalTo(true));
//    }
//
//    public function testAssertFalse(): void
//    {
//        $resultBoolean = (bool)false;
//        $this->assertFalse($resultBoolean, "should be true");
//        $this->assertFalse($resultBoolean);
//        // with assertThat
//        assertThat($resultBoolean, equalTo(false));
//    }
//
//    public function testAssertNull(): void
//    {
//        $resultX = null;
//        $this->assertNull($resultX, "should be null");
//        $this->assertNull($resultX);
//        // with assertThat
//        assertThat($resultX, nullValue());
//    }
//
//    public function testAssertNotNull(): void
//    {
//        $resultX = new X(null);
//        $this->assertNotNull($resultX, "should be not null");
//        $this->assertNotNull($resultX);
//        // with assertThat
//        assertThat($resultX, not(nullValue()));
//        assertThat($resultX, notNullValue());
//    }
//
//    public function testAssertSame(): void
//    {
//        $expectedX = new X(null);
//        $resultX = $expectedX;
//        $this->assertSame($expectedX, $resultX, "should be same");
//        $this->assertSame($expectedX, $resultX);
//        // better than
//        assertThat($resultX, sameInstance($resultX));
//    }
//
//    public function testAssertNotSame(): void
//    {
//        $expectedX = new X(null);
//        $resultX = new X(null);
//        $this->assertNotSame($expectedX, $resultX, "should be distinct");
//        $this->assertNotSame($expectedX, $resultX);
//        // better than
//        assertThat($resultX, not(sameInstance($expectedX)));
//    }

test('assertArrayEquals', () => {
  const expectedArray = [1, 2, 3]
  const resultArray = [1, 2, 3]
  expect(expectedArray).toEqual(resultArray)

  const expectedXArray = [new X(null), new X(null), new X(null)]
  const resultXArray = [expectedXArray[0], expectedXArray[1], expectedXArray[2]]

  expect(expectedXArray).toEqual(resultXArray)
})

test('assertThatForRelational', () => {
  const resultInt = 1
  expect(resultInt)
    .toBeGreaterThan(0)
    .toBeGreaterThanOrEqual(0)
    .toBeGreaterThanOrEqual(1)
    .toBeLessThan(2)
    .toBeLessThanOrEqual(2)
    .toBeLessThanOrEqual(1)
})
//
//    public function testAssertThatForRelational(): void
//    {
//        $resultInt = 1;
//        assertThat($resultInt, greaterThan(0));
//        assertThat($resultInt, greaterThanOrEqualTo(0));
//        assertThat($resultInt, greaterThanOrEqualTo(1));
//        assertThat($resultInt, lessThan(2));
//        assertThat($resultInt, lessThanOrEqualTo(2));
//        assertThat($resultInt, lessThanOrEqualTo(1));
//    }
//
//    public function testAssertThatCombined(): void
//    {
//        assertThat("characters", allOf(startsWith("char"), endsWith("ters")));
//        assertThat("characters", anyOf(containsString("car"), containsString("rac")));
//    }
//
//    public function testAssertThatArray(): void
//    {
//        $resultList = [1, 2, 3];
//        assertThat($resultList, hasItemInArray(2));
//        assertThat($resultList, arrayContainingInAnyOrder(1, 3, 2));
//    }
//}