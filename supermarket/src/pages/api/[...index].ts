import type { NextApiRequest, NextApiResponse } from "next";
async function fetchWithTimeout(url: string, options?: RequestInit, timeout = 5000): Promise<globalThis.Response | unknown> {
  return await Promise.race([
    fetch(url, options),
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ message: "timeout" }), timeout)
    )
  ]);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = req.url?.replace("/api", "");
  const Authorization = req.headers.authorization as string
  const method = req.method
  const BackEndUrl = process.env.BACK_END_URL
  let body = req.body
  console.log(body)
  if (typeof body !== 'string') {
    body = JSON.stringify(req.body);
  }
  const options: any = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if (Authorization) {
    options.headers.Authorization = Authorization
  }
  if (body && body.length > 2) {
    options.body = body
  }
  console.log(BackEndUrl, url);
  console.log('options: ', options);
  try {
    const response = await fetch(`${BackEndUrl}${url}`,
      options
    ) as globalThis.Response
    try {
      const json = await response.json()
      return res.status(response.status).json(json)
    } catch (error) {
      return res.status(response.status).json({})
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ error: error.message })
  }
}