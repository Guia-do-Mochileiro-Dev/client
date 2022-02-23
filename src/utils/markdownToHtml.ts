import { remark } from 'remark'
import remarkHtml from 'remark-html'

const markdownToHtml = async (markdown: any) => {
  const result = await remark().use(remarkHtml).process(markdown)

  return result.toString()
}

export default markdownToHtml
