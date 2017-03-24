var item = function () {
    this.Name = null;
    this.DataType = null;
    this.Size = null;
    this.Value = null;
    this.TypePut = null;
}

module.exports = function (app) {
    var Parameter =  {
        newParameter : function() {
            _item = new item();
            return _item;
        }
    } 
    return Parameter;
}