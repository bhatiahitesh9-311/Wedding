export const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ')

export const parseWeddingDate = (date: string) => {
  const [day, month, year] = date.split('-').map(Number)
  const parsed = new Date(year, month - 1, day)
  return Number.isNaN(parsed.getTime()) ? date : parsed
}

export const formatWeddingDate = (date: string) => {
  const parsed = parseWeddingDate(date)
  if (typeof parsed === 'string') return parsed
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(parsed)
}
