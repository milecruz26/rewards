import mongoose, { Document, Schema } from 'mongoose';

export interface ICompany extends Document {
  companyId: number;
  name: string;
  logo: string;
  description: string;
  users: mongoose.Types.ObjectId[];
  missions: mongoose.Types.ObjectId[];
  badges: mongoose.Types.ObjectId[];
  privileges: mongoose.Types.ObjectId[];
}

const CompanySchema: Schema = new Schema({
  companyId: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  logo: { type: String },
  description: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  missions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mission' }],
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }],
  privileges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Privilege' }],
});

export default mongoose.models.Company || mongoose.model<ICompany>('Company', CompanySchema);
