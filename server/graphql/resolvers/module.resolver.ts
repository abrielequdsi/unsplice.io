import Module from '../../models/module.model';
import Program from '../../models/program.model';

//TODO add interfaces to external file

export default {
  Query: {
    getModuleList: async (_: IProgram, { programId }: IProgram) => {
      const program = await Program.findById(programId); // ["cs1", "cs2", "cs3"]

      // Find module where code is ["cs1", "cs2", "cs3"]
      const modules = await Module.find({
        moduleCode: {
          $in: program!.moduleCodes,
        },
      });

      return modules;
    },
    getModule: async (_: IModule, { moduleId }: IModule) => {
      const module = await Module.findById(moduleId);
      return module;
    },
  },
  Mutation: {
    createModule: async (
      _: any,
      { moduleInput: { programId, name, moduleCode, desc } }: IModule
    ) => {
      // TODO: Validate user Input

      // Update program's module code array
      const updatedProgram = await Program.update(
        { _id: programId },
        { $push: { moduleCodes: moduleCode } }
      );

      // create module
      const newModule = await Module.create({
        name,
        moduleCode,
        desc,
        progress: 0,
        contents: [],
        createdAt: new Date().toISOString(),
      });

      return newModule;
    },
  },
};

interface IProgram {
  programId: string;
}

interface IModule {
  moduleId: string;
  moduleInput: {
    name: string;
    moduleCode: string;
    desc: string;
    moduleId: string;
    programId: string;
  };
}
