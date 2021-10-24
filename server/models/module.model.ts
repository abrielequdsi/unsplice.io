import { model, Schema } from 'mongoose';

//TODO need to add interfaces to external file
interface IContent {
  number: number;
  title: string;
  desc: string;
  completed: boolean;
  notionContent: string;
  createdAt: string;
}
const contentSchema = {
  number: Number,
  title: String,
  desc: String,
  completed: Boolean,
  notionContent: String,
  createdAt: String,
};

interface IModule {
  name: string;
  moduleCode: string;
  desc: string;
  progress: number;
  contents: IContent[];
  createdAt: string;
}

const moduleSchema = new Schema<IModule>({
  name: String,
  moduleCode: String,
  desc: String,
  progress: Number,
  contents: [contentSchema],
  createdAt: String,
});

export default model('Module', moduleSchema);
