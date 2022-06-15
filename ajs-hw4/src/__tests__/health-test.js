import unitHealth from "../health";

test('should wounded', () => {
    const result = unitHealth({ name: 'Маг', health: 40 });
    expect(result).toBe('wounded');
});

test.each([
    [{name: 'мечник', health: 10}, 'critical'],
    [{name: 'маг', health: 100}, 'healthy'],
    [{name: 'лучник', health: 80}, 'healthy'],
    [{name: 'целитель', health: 45}, 'wounded'],
])
('testing health function', (unit, healthStatus) => {
    const result = unitHealth(unit);
    expect(result).toBe(healthStatus)
});

test('Parameter is not a number!', () => {
    expect(() => {
      showHealth({});
    }).toThrow();
  });
  
  test('Parameter is not a number!', () => {
    expect(() => {
      showHealth({ name: 'Маг', health: 'mistake' });
    }).toThrow();
  });
  
  test('Parameter is not a number!', () => {
    expect(() => {
      showHealth({ name: 'Маг', health: -10 });
    }).toThrow();
  });