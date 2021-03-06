Package.describe({
  name: 'forwarder:autoform-wizard-iron-router',
  summary: 'Iron Router bindings for AutoForm Wizard.',
  version: '0.1.4',
  git: 'https://github.com/forwarder/meteor-wizard-iron-router.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'forwarder:autoform-wizard@0.9.0',
    'iron:router@1.0.0'
  ], 'client');

  api.addFiles([
    'client.js'
  ], 'client');
});
