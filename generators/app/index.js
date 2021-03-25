const Generator = require('yeoman-generator');

const camelize = (componentName) =>
  componentName
    .replace(/^\S/, (s) => s.toUpperCase())
    .replace(/-\S/, (s) => s.toUpperCase()[1]);

const dasherize = (componentName) => 
  componentName
    .replace(/^\S/, (s) => s.toLowerCase())
    .replace(/([A-Z])/, (s) => `-${s.toLowerCase()}`);

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
    const camelizedComponentName = camelize(componentName);
    const componentPath = `${path}/${dasherize(componentName)}`
    
    this.fs.copyTpl(
      this.templatePath('__tests__/index.test.tsx'),
      this.destinationPath(`${componentPath}/__tests__/${camelizedComponentName}.test.tsx`),
      { componentName: camelizedComponentName }
    );

    this.fs.copyTpl(
      this.templatePath('component.tsx'),
      this.destinationPath(`${componentPath}/${camelizedComponentName}.tsx`),
      { componentName: camelizedComponentName }
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`${componentPath}/index.ts`),
      { componentName: camelizedComponentName }
    );

    this.fs.copyTpl(
      this.templatePath('interfaces.ts'),
      this.destinationPath(`${componentPath}/interfaces.ts`),
      { componentName: camelizedComponentName }
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
      this.destinationPath(`${componentPath}/${camelizedComponentName}.stories.tsx`),
      { componentName: camelizedComponentName }
    )

    this.fs.copyTpl(
      this.templatePath('index.mdx'),
      this.destinationPath(`${componentPath}/${camelizedComponentName}.mdx`),
      { componentName: camelizedComponentName }
    )
  }

  end() {
    this.log('end');
  }

}