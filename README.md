# GrowingIO Generator 

We have written a Yeoman generator to help get you started. We plan to add templates for most react component types into this.

## Install the Generator

Install Yeoman and the GrowingIO generator:

```bash
$ npm install -g yo generator-gio
```

or using Yarn:

```bash
$ yarn golbal add yo generator-gio
```

## Run the Generator

The Yeoman generator will walk you through the steps required to create your component prompting for the required information.

To launch the generator simply type:

```bash
$ yo gio
? Your Component name Empty
? Your Component path src/components/
writing....
   create src/components/empty/__tests__/Empty.test.tsx
   create src/components/empty/Empty.tsx
   create src/components/empty/index.ts
   create src/components/empty/interfaces.ts
   create src/components/empty/style/index.ts
   create src/components/empty/style/index.less
   create src/components/empty/Empty.stories.tsx
   create src/components/empty/Empty.mdx
end
```
