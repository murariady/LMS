import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await db.query('SELECT 1');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error },
      { status: 500 }
    );
  }
}
