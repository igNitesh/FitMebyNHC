import dbConnect from '@/lib/dbConnect';
import Order from '../models/Order';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  // 1. Establish Database Connection
  await dbConnect();

  try {
    // 2. Extract Data from Request Body
    const body = await request.json();
    console.log('Received order data:', body);

    // 3. Server-Side Validation (Crucial for Security!)
    // Use a library like Zod here for robust validation
    if (!body.name || !body.email || !body.pincode) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const documentName = `${body.name.replace(/\s+/g, '')}_${body.phone}`;


    // 4. Create Order in MongoDB
    const newOrder = await Order.create({
      documentName: documentName,
      customerName: body.name,
      quantity: body.quantity || 1,  // ✅ Fixed typo (was queueMicrotaskty)
      email: body.email,
      phone: body.phone,
      address: body.address,
      city: body.city,
      state: body.state,
      pincode: body.pincode,
      paymentMethod: body.paymentMethod,
      total: 1499, 
    });
    console.log('New order created with ID: %s', newOrder._id);

    // 5. Send Success Response
    return NextResponse.json({ 
      message: 'Order placed', 
      id: newOrder._id.toString(),
      documentName: documentName,
      total: newOrder.total,
    }, { status: 201 });

  } catch (error) {
    console.error('Order placement error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}