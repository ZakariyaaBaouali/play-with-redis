import { createClient } from "redis";

export class Cashe {
  private client;

  constructor() {
    this.client = createClient();
    this.client.on("error", () => console.log("Error with redis"));
  }

  public async connectTo() {
    try {
      await this.client.connect();
      console.log("connect to redis");
    } catch (error) {
      console.log(error);
    }
  }

  public async storeCashedData(key: string, data: any) {
    this.client.setEx(key, 60, data); //1m expiration
    console.log(`${data} with ${key} stored 🚀🚀🚀`);
  }

  public async getCashedData(key: string) {
    try {
      const data = await this.client.get(key);
      return data;
    } catch (error) {
      console.log(`cann't key data for key ${key}`);
      return null;
    }
  }
}
