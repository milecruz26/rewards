import mongoose, { Document, Schema } from 'mongoose';

export interface IMission extends Document {
  missionId: number;
  companyId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  image: string;
  users: mongoose.Types.ObjectId[];
  completedBy: mongoose.Types.ObjectId[];
  xps: number;
  golds: number;
  badges: mongoose.Types.ObjectId[];
}

const MissionSchema: Schema = new Schema({
  missionId: { type: Number, unique: true, required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  completedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  xps: { type: Number, required: true },
  golds: { type: Number, required: true },
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
});

export default mongoose.models.Mission || mongoose.model<IMission>('Mission', MissionSchema);
