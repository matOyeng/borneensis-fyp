import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://exif-photo-blog-h4gc-qo28wsmf7.vercel.app/');
  const html = await response.text();

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
