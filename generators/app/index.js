const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts){
    super(args, opts);
    this.argument('componentName', { type: String, required: false });
  }

  prompting(){
    return this.prompt([{
      type: 'input',
      name: 'componentNameFromPrompt',
      message: 'Your Component name',
      when: this.options.componentName === undefined
    }, {
      type: 'input',
      name: 'path',
      message: 'Your Component path',
      default: './',
    }]).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    this.log('writing....');
    const { componentName: componentNameFromArgument } = this.options;
    const { path, componentNameFromPrompt } = this.answers;
    
    const componentName = (componentNameFromArgument || componentNameFromPrompt)
    const componentNameFirstUpperCase = componentName.replace(/^\S/, s => s.toUpperCase());
    const componentPath = `${path}/${componentName.toLowerCase()}`
    
    this.fs.copyTpl(
      this.templatePath('__tests__/index.test.tsx'),
      this.destinationPath(`${componentPath}/__tests__/${componentNameFirstUpperCase}.test.tsx`),
      { componentName: componentNameFirstUpperCase }
    );

    this.fs.copyTpl(
      this.templatePath('component.tsx'),
      this.destinationPath(`${componentPath}/${componentNameFirstUpperCase}.tsx`),
      { componentName: componentNameFirstUpperCase }
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`${componentPath}/index.ts`),
      { componentName: componentNameFirstUpperCase }
    );

    this.fs.copyTpl(
      this.templatePath('interfaces.ts'),
      this.destinationPath(`${componentPath}/interfaces.ts`),
      { componentName: componentNameFirstUpperCase }
    );

    this.fs.copyTpl(
      this.templatePath('style/index.ts'),
      this.destinationPath(`${componentPath}/style/index.ts`)
    )

    this.fs.copyTpl(
      this.templatePath('style/index.less'),
      this.destinationPath(`${componentPath}/style/index.less`)
    )

    this.fs.copyTpl(
      this.templatePath('index.stories.tsx'),
      this.destinationPath(`${componentPath}/${componentNameFirstUpperCase}.stories.tsx`),
      { componentName: componentNameFirstUpperCase }
    )
    this.fs.copyTpl(
      this.templatePath('index.mdx'),
      this.destinationPath(`${componentPath}/${componentNameFirstUpperCase}.mdx`),
      { componentName: componentNameFirstUpperCase }
    )

  }

  end() {
    this.log('end');
  }

}