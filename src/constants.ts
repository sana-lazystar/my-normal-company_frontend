export const MILLISECOND_TIME_FORMAT = {
  millisecond: 1,
  seconds: (second: number) => MILLISECOND_TIME_FORMAT.millisecond * 1000 * second,
  minutes: (minute: number) => MILLISECOND_TIME_FORMAT.seconds(60) * minute,
  hours: (hour: number) => MILLISECOND_TIME_FORMAT.minutes(60) * 60 * hour,
  days: (day: number) => MILLISECOND_TIME_FORMAT.hours(24) * day,
} as const;

export const ROUTE_URL = {
  home: '/',
  productList: '/product/list',
} as const;

export const API_URL = {
  product: {
    list: '/',
    detail: '/products',
  },
  seller: {
    list: '/sellers',
    favorite: (seller: string) => `/sellers/${seller}:favorite`,
  },
} as const;

const BREAK_POINTS = [480, 1024, 1440, 1920] as const;

export const MEDIA_QUERY = BREAK_POINTS.map(breakPoint => `@media (max-width: ${breakPoint}px)`);
