import destrStats from '../destructuring';

test('should destructuring stats with a description', () => {
  const received = destrStats({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  });
  const expected = [
    8,
    'Двойной выстрел',
    'http://...',
    'Двойной выстрел наносит двойной урон',
  ];
  expect(received).toEqual(expected);
});

test('should destructuring stats without description', () => {
  const received = destrStats({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
  });
  const expected = [
    8,
    'Двойной выстрел',
    'http://...',
    'Описание недоступно',
  ];
  expect(received).toEqual(expected);
});
