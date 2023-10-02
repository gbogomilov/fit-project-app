import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { MemoryCache, caching } from "cache-manager";

@Injectable()
export class CacheService implements OnApplicationBootstrap {
  private cache: MemoryCache;

  constructor() {}
  async onApplicationBootstrap() {
    this.cache = await caching("memory", {
      max: 100,
      ttl: 60, // time to live in seconds
    });
  }

  async get(key: string): Promise<any> {
    return this.cache.get(key);
  }

  async set(key: string, value: any, ttl: number): Promise<void> {
    return this.cache.set(key, value, ttl);
  }

  async del(key: string): Promise<void> {
    return this.cache.del(key);
  }
}
