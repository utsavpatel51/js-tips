import { cookies, headers } from 'next/headers';

export async function GET() {
  const blogSlug = _getCurrentSlug();
  if (!blogSlug) return Response.error();
  const result = await _getCurrentCount(blogSlug);

  const isUserLiked = cookies().get(blogSlug)?.value;

  return Response.json({
    likes: result,
    status: isUserLiked,
  });
}

export async function POST(request: Request) {
  const blogSlug = _getCurrentSlug();
  if (!blogSlug) return Response.error();
  const result = await _getCurrentCount(blogSlug);

  const isLike = (await request.json()).liked;
  const updatedLike = isLike ? +result + 1 : +result - 1;

  const response = await fetch(
    `${process.env.KV_REST_API_URL}/set/${blogSlug}/${updatedLike}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
    }
  );

  const data = await response.json();

  if (isLike) {
    cookies().set(blogSlug, isLike);
  } else {
    cookies().delete(blogSlug);
  }

  return Response.json(data);
}

async function _getCurrentCount(blog: string) {
  const currentCount = await fetch(
    `${process.env.KV_REST_API_URL}/get/${blog}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
    }
  );
  const data = await currentCount.json();

  return data.result || 0;
}

function _getCurrentSlug() {
  const headersList = headers();
  return headersList.get('referer')?.split('/').at(-1);
}
