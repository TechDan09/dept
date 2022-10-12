import path from 'path';
import fsPromises from 'fs/promises';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function index(req: NextApiRequest, res: NextApiResponse) {
  const dir = path.join(process.cwd(), 'data');

  const clients = await fsPromises.readFile(dir + '/clients.json', 'utf-8');

  res.status(200).send(JSON.parse(clients));
}
