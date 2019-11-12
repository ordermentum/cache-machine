import Redis from 'ioredis';

declare function OrdermentumCacheMachine(
  redis: Redis.Redis
): {
  redis: Redis.Redis;

  parse: (val: string) => object | false;

  set: (key: string, value: any, ttl?: number) => Promise<any>;

  get: (key: string, defaultValue?: any | null) => Promise<any>;

  getOrSet: (key: string, fallback?: () => any, ttl?: number) => Promise<any>;

  getAndDel: (key: string) => Promise<any>;

  rateLimit: (key: string, limit?: number, window?: number) => Promise<boolean>;
};

export = OrdermentumCacheMachine;