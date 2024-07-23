import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  userId: number;
  companyId: mongoose.Types.ObjectId;
  password: string;
  username: string;
  email: string;
  avatar: string;
  xp: number;
  gold: number;
  badges: mongoose.Types.ObjectId[];
  missions: mongoose.Types.ObjectId[];
  privileges: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
  userId: { type: Number, unique: true, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  xp: { type: Number, default: 0 },
  gold: { type: Number, default: 0 },
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
  missions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mission' }],
  privileges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Privilege' }],
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
