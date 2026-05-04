export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: Date.now()
  });
}
/api/health
http://localhost:3000/api/health
{ "status": "ok", "timestamp": 1714850000000 }
