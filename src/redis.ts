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

  public async storeCashe(key: string, data: any) {
    this.client.set(key, data);
    console.log(`${data} with ${key} stored 🚀🚀🚀`);
  }

  public async getCashedData(key: string) {
    try {
      const data = await this.client.get(key);
      console.log(data);
    } catch (error) {
      console.log(`cann't key data for key ${key}`);
    }
  }
}
