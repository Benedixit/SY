import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '../../../lib/wordpress'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const post = await getPostBySlug(params.slug);
    return NextResponse.json(post);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    
    if (message === 'Post not found') {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
