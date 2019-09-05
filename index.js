module.exports = function registerRouters(app, methodPathSeparators = '$') {
  let ret = [];
  let appRegisters = app._router.stack.filter(i => i.name == 'router')
  for (let appReg of appRegisters) {
     let tmpStr = appReg.regexp.toString()
     let baseUrl = tmpStr.substring(2, tmpStr.indexOf('?')).replace(/\\/g, '')
     appReg.handle.stack.forEach(layer => {
       let fullPath = Object.keys(layer.route.methods).join('') + methodPathSeparators +baseUrl + layer.route.path
       fullPath = fullPath.replace('//', '/')
       ret.push(fullPath)
     })
  }
  return ret;
}