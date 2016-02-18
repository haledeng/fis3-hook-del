/*
 * delete deploy path
 */
var path = require('path');
var toString = Object.prototype.toString;
module.exports = function(fis, opts) {
    var proDir = fis.project.getProjectPath();
    opts.dir = opts.dir || '../dist';
    var type = toString.apply(opts.dir);
    if (type === '[object Array]') {
        opts.dir.forEach(function(dir) {
            fis.util.del(path.join(proDir, dir));
        });
    } else if (type === '[object String]') {
        fis.util.del(path.join(proDir, opts.dir));
    } else {
        fis.error('illegal params!');
    }
};
