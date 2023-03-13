import type {NextApiRequest, NextApiResponse} from 'next'

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  // Can pass token through previewData if auth
  res.setPreviewData({})
  res.writeHead(307, {Location: '/'})
  res.end()
}
