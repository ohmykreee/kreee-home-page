import data from "../data/bg.json"

export interface bgMetadata {
  file: string
  source: string
  artist: string
  url: string
  }

const useRandomBg = (): bgMetadata => {
  const bgMetadata:bgMetadata = data[Math.floor(Math.random() * data.length)]
  return bgMetadata
}

export default useRandomBg