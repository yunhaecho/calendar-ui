export type DotColor = 'primary' | 'blue' | 'green' | 'orange' | 'red'

export const ALL_DOT_COLORS: DotColor[] = [
  'primary',
  'blue',
  'green',
  'orange',
  'red',
]

export const DOT_COLOR_MAP: Record<DotColor, string> = {
  primary: 'bg-primary-300',
  blue: 'bg-blue-200',
  green: 'bg-green-300',
  orange: 'bg-orange-200',
  red: 'bg-red-300',
}
