import { Beach, BeachResponse } from "./beach.interface"

export const mapperFromBeachResponseToBeach = (beach: BeachResponse): Beach => {
  return {
    name: beach.name
  }
}