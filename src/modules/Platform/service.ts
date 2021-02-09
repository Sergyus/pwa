class PlatformService {
  public get isClient(): boolean {
    return __CLIENT__;
  }

  public get isServer(): boolean {
    return __SERVER__;
  }
}

export default new PlatformService();
