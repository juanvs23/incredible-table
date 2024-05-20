import { CreateRooms } from "../../services/createrooms";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const limit = request.nextUrl.searchParams.get("limit");
  const rooms = new CreateRooms(parseInt(limit || "15")).setRooms();
  return Response.json(rooms);
}
