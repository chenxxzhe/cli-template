import fs from 'fs'
import path from 'path'
import stream from 'stream'
import axios from 'axios'
import { exec as oldExec } from 'child_process'
import { promisify } from 'util'
const httpAdapter = require('axios/lib/adapters/http')

/** promisify exec */
export const exec = promisify(oldExec)

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function isObject(item: any): item is Record<string, any> {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

/** writer never output */
export class NullWriter extends stream.Writable {
  _write(chunk: any, enc: any, cb: () => any): void {
    setImmediate(cb)
  }
}

interface SaveFileOptions {
  flags?: string;
  encoding?: BufferEncoding;
  fd?: number;
  mode?: number;
  autoClose?: boolean;
  emitClose?: boolean;
  start?: number;
  highWaterMark?: number;
}

export async function saveFile(output: string, text: string, opts: SaveFileOptions = {}): Promise<void> {
  fs.mkdirSync(path.dirname(output), { recursive: true })
  const writer = fs.createWriteStream(output, Object.assign({ encoding: 'utf-8' }, opts))
  writer.write(text)
  writer.end()
}

/** download file */
export const downloadFile = async (url: string, filePath: string): Promise<void> => {
  const res = await axios.get(url, { responseType: 'stream', adapter: httpAdapter })
  const stream: fs.ReadStream = res.data
  const writer = fs.createWriteStream(filePath, { flags: 'w' })
  stream.pipe(writer)
  return new Promise<void>((resolve) => {
    writer.once('finish', () => {
      resolve()
    })
  })
}