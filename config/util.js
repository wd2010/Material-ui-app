const fs = require('fs');
const path = require('path');
const url = require('url');

function buildManifest(compiler, compilation) {
  let context = compiler.options.context;
  let manifest = {};
  console.log('===============',compilation.inputFileSystem._readFileStorage.data)
  compilation.chunks.forEach(chunk => {
    chunk.files.forEach(file => {
      chunk.forEachModule(module => {
        console.log('-----',module)
        let id = module.id;
        let name = typeof module.libIdent === 'function' ? module.libIdent({ context }) : null;
        let publicPath = url.resolve(compilation.outputOptions.publicPath || '', file);

        if (!manifest[module.rawRequest]) {
          manifest[module.rawRequest] = [];
        }

        manifest[module.rawRequest].push({ id, name, file, publicPath });
      });
    });
  });
  // console.log('manifest:',manifest)
  return manifest;
}

class Demo {
  constructor(opts = {}) {
    this.filename = opts.filename;
  }

  apply(compiler) {
    compiler.plugin('compilation', (compilation, data) => {
      data.normalModuleFactory.plugin('parser', function(parser, options) {
        parser.plugin('expression import', function(expr) {
          console.log('---',expr)
          // you now have a reference to the call expression
        });
      });
    });
  }
}
module.exports=Demo