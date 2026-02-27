import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  documentName: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  paymentMethod: { type: String, enum: ['cod', 'online'], default: 'cod' },
  status: { type: String, default: 'Pending' },
  product: { type: String, default: 'SlimVeda' },
  total: { type: Number, default: 1499 },
}, { 
    timestamps: true,
    collection: 'Orders'  
});

// Use existing model if defined, otherwise create a new one
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

export default Order;