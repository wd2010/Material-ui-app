const fs = require('fs');
const path = require('path');
const url = require('url');

function buildManifest(compiler, compilation) {
  let context = compiler.options.context;
  let manifest = {};

  compilation.chunks.forEach(chunk => {
    chunk.files.forEach(file => {
      chunk.forEachModule(module => {
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

  return manifest;
}

class Demo {
  constructor(opts = {}) {
    this.filename = opts.filename;
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      const manifest = buildManifest(compiler, compilation);
      var json = JSON.stringify(manifest, null, 2);
      const outputDirectory = path.dirname(this.filename);
      try {
        fs.mkdirSync(outputDirectory);
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err;
        }
      }
      fs.writeFileSync(this.filename, json);
      callback();
    });
  }
}
module.exports=Demo