import { model, Schema } from 'mongoose';

interface Program {
  name: string;
  programCode: string;
  desc: string;
  moduleCodes: string[];
  createdAt: string;
}

const programSchema = new Schema<Program>({
  name: String,
  programCode: String,
  desc: String,
  moduleCodes: [String],
  createdAt: String,
});

module.exports = model<Program>('Program', programSchema);
