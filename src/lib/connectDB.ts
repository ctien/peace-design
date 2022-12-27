import mongoose from 'mongoose'

// OUR TODO SCHEMA
const OrderSchema = new mongoose.Schema({
  customer_name: String,
  customer_phone: String,
  customer_address: String,
  product_id: String,
})

const TodoSchema = new mongoose.Schema({
  item: String,
  completed: Boolean,
})

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  },
)

// OUR TODO MODEL
export const Todo = mongoose.models.Todo || mongoose.model('Todo', TodoSchema)
export const User = mongoose.models.User || mongoose.model('User', UserSchema)
export const Order =
  mongoose.models.Order || mongoose.model('Order', OrderSchema)

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env

// connection function
const connection: any = {}
// export const connect = async () => {
//   await mongoose
//     .connect(DATABASE_URL as string)
//     .catch((err) => console.log(err))
//   console.log('Mongoose Connection Established')
// }

export async function connect() {
  if (connection.isConnected) {
    console.log('already connected')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState
    if (connection.isConnected === 1) {
      console.log('use previous connection')
      return
    }
    await mongoose.disconnect()
  }
  const db = await mongoose.connect(DATABASE_URL as string)
  connection.isConnected = db.connections[0].readyState
}

export async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnected = false
    } else {
      console.log('not disconnected')
    }
  }
}

export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.updatedAt = doc.updatedAt.toString()
  return doc
}
