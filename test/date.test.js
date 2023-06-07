import { formatDate } from '../src/date'

test('formatDate', () => {
  expect(formatDate('2023-06-06')).toBe('2023-06-06')
})

test('formatDate', () => {
  expect(formatDate(Date.now(), 'yyyy-MM-dd')).toBe('2023-06-06')
})
