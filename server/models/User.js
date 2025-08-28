import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['owner', 'staff'], default: 'owner' }
}, { timestamps: true });

UserSchema.index({ email: 1 }, { unique: true });

export default mongoose.model('User', UserSchema);


