import Module from '../../models/module.model';

export default {
  Query: {
    getContent: async (_: any, { moduleId, contentId }: any) => {
      const module = await Module.findById(moduleId);
      const content = module.contents.find(
        (content: any) => content.id === contentId
      );
      return content;
    },
  },
  Mutation: {
    createContent: async (
      _: any,
      { contentInput: { moduleId, number, title, desc, notionContent } }: any
    ) => {
      // TODO: Validate user Input

      console.log(moduleId);

      // create module
      const newContent = {
        number,
        title,
        desc,
        completed: false,
        notionContent,
        createdAt: new Date().toISOString(),
      };

      // Update module's content array
      const updatedModule = await Module.update(
        { _id: moduleId },
        { $push: { contents: newContent } }
      );

      console.log(newContent);

      return newContent;
    },
  },
};
