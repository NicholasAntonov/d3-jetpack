export default function(name, data){
  console.log(name, data)
  if (typeof(data) == 'string'){
    console.warn("DEPRECATED: jetpack's appendMany order of arguments has changed. It's appendMany('div', data) from now on")
    var temp = data
    data = name
    name = temp
  }

  console.log(name, data)

  return this.selectAll(null).data(data).enter().append(name);
}
