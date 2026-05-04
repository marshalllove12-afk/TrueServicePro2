export async function GET() {
  // Temporary mock data until DB is connected
  const jobs = [
    {
      id: 1,
      title: "Install ceiling fan",
      customer: "John Doe",
      status: "open"
    },
    {
      id: 2,
      title: "Fix leaking sink",
      customer: "Sarah Smith",
      status: "in_progress"
    }
  ];

  return Response.json(jobs);
}

export async function POST(request) {
  const body = await request.json();

  // In the future, this will save to your database
  return Response.json({
    message: "Job created (mock)",
    job: body
  });
}
