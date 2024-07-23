import mongoose, { Document, Schema } from 'mongoose';

export interface IBadge extends Document {
  badgeId: number;
  companyId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  image: string;
  users: mongoose.Types.ObjectId[];
}

const BadgeSchema: Schema = new Schema({
  badgeId: { type: Number, unique: true, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

export default mongoose.models.Badge || mongoose.model<IBadge>('Badge', BadgeSchema);
