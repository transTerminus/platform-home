import { NextResponse } from 'next/server'
import combinedIndex from 'combined_index.json'

interface Document {
  url: string
  title: string
  description: string
  author: string
  date: string
  region: string
  format: string
  size: number
  tags: string[]
  link: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchTerm = searchParams.get('term')

  if (!searchTerm) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 })
  }

  const searchResults: { url: string; description: string; tags: string[] }[] = []
  for (const key in combinedIndex) {
    const document = combinedIndex[key] as Document
    if (
      key.includes(searchTerm) ||
      document.description.includes(searchTerm) ||
      document.tags.includes(searchTerm)
    ) {
      searchResults.push(document)
    }
  }
  return NextResponse.json(searchResults)
}
