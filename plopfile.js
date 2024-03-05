/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = function (plop) {
  plop.setGenerator('component', {
    'description': 'Create component',
    'prompts': [
      {
        'type': 'input',
        'name': 'name',
        'message': 'Component name?',
      },
    ],
    'actions': [
      {
        'type': 'add',
        'path': 'src/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        'templateFile': 'templates/component.tsx.hbs',
      },
      {
        'type': 'add',
        'path': 'src/components/{{kebabCase name}}/index.ts',
        'templateFile': 'templates/index.ts.hbs',
      },
      {
        'type': 'add',
        'path': 'src/components/{{kebabCase name}}/{{kebabCase name}}-prop-types.ts',
        'templateFile': 'templates/component-prop-types.ts.hbs',
      },
      {
        'type': 'add',
        'path': 'src/components/index.ts',
        'skipIfExists': true,
      },
      {
        'type': 'append',
        'path': 'src/components/index.ts',
        'separator': '',
        'template': 'export { default as {{pascalCase name}} } from \'./{{kebabCase name}}\'\n',
        'unique': true,
      },
    ],
  })
}
